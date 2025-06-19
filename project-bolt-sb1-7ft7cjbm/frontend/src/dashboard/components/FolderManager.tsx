// components/dashboard/FolderManager.tsx
import React, { useState } from "react";
import axios from "axios";

const FolderManager = () => {
  const [folderUrl, setFolderUrl] = useState("");
  const [folders, setFolders] = useState<any[]>([]);

  const fetchFolders = async () => {
    try {
      const response = await axios.get("https://abeer.onrender.com/api/folders");
      setFolders(response.data);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const folderId = extractFolderId(folderUrl);
      await axios.post("https://abeer.onrender.com/api/folders", {
        url: folderUrl,
        folderId,
      });
      setFolderUrl("");
      fetchFolders();
    } catch (error) {
      console.error("Error adding folder:", error);
    }
  };

  const extractFolderId = (url: string) => {
    if (!url) return null;

    // Handle different Google Drive URL formats
    const patterns = [
      /drive\.google\.com\/drive\/folders\/([^/?]+)/,
      /drive\.google\.com\/open\?id=([^&]+)/,
      /drive\.google\.com\/file\/d\/([^/]+)/,
      /[&?]folderid=([^&]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    // If no pattern matched, try to extract ID directly (might be just an ID)
    const idPattern = /^[a-zA-Z0-9_-]+$/;
    if (idPattern.test(url)) {
      return url;
    }

    return null;
  };

  return (
    <div>
      <h2>Manage Google Drive Folders</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={folderUrl}
          onChange={(e) => setFolderUrl(e.target.value)}
          placeholder="Enter Google Drive folder URL"
          required
        />
        <button type="submit">Add Folder</button>
      </form>

      <div>
        <h3>Available Folders</h3>
        <ul>
          {folders.map((folder) => (
            <li key={folder._id}>
              <a href={folder.url} target="_blank" rel="noopener noreferrer">
                {folder.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FolderManager;
