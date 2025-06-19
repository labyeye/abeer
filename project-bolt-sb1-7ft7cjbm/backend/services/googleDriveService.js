// backend/services/googleDriveService.js
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

let drive;

async function initializeDrive() {
  if (!drive) {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: process.env.GOOGLE_DRIVE_CREDENTIALS_PATH || path.join(__dirname, '../config/hallowed-oven-463416-v9-987e956be3bc.json'),
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