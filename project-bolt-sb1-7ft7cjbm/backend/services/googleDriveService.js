// backend/services/googleDriveService.js
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

let drive;

async function initializeDrive() {
  if (!drive) {
    try {
      // Properly format the private key
      const privateKey = process.env.GOOGLE_PRIVATE_KEY
        .replace(/\\n/g, '\n')  // Replace escaped newlines
        .replace(/"/g, '');     // Remove any quotes

      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: privateKey,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`
        },
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      drive = google.drive({ version: 'v3', auth });
    } catch (error) {
      console.error('Drive initialization error:', error);
      throw error;
    }
  }
  return drive;
}
async function getFolderContents(folderId) {
  if (!folderId) {
    throw new Error('No folder ID provided');
  }

  try {
    const drive = await initializeDrive();
    const response = await drive.files.list({
      q: `'${folderId}' in parents and (mimeType contains 'image/' or mimeType = 'application/vnd.google-apps.folder')`,
      fields: 'files(id, name, thumbnailLink, webContentLink, mimeType)',
      orderBy: 'name',
      pageSize: 1000
    });

    if (!response.data.files) {
      return [];
    }

    // Filter for only image files
    return response.data.files.filter(file => 
      file.mimeType && file.mimeType.startsWith('image/')
    );
  } catch (error) {
    console.error('Error fetching folder contents:', error);
    throw new Error(`Failed to fetch folder contents: ${error.message}`);
  }
}

module.exports = { getFolderContents, initializeDrive };