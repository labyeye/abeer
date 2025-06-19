// components/dashboard/SelectionsViewer.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const SelectionsViewer = () => {
  const [selections, setSelections] = useState<any[]>([]);
  const [selectedSelection, setSelectedSelection] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    fetchSelections();
  }, []);

  const fetchSelections = async () => {
    try {
      const response = await axios.get('http://localhost:2500/api/selections');
      setSelections(response.data);
    } catch (error) {
      console.error('Error fetching selections:', error);
    }
  };

  const downloadSelection = async (selection: any) => {
    if (!selection || !selection.images || selection.images.length === 0) return;
    
    setIsDownloading(true);
    try {
      const response = await axios.post(
        'http://localhost:2500/api/selections/download',
        { imageIds: selection.images.map((img: any) => img.id) },
        { responseType: 'blob' }
      );
      
      const blob = new Blob([response.data], { type: 'application/zip' });
      saveAs(blob, `${selection.customerName || 'selection'}_images.zip`);
    } catch (error) {
      console.error('Error downloading images:', error);
      alert('Failed to download images. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Customer Selections</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '30%', borderRight: '1px solid #ddd', paddingRight: '20px' }}>
          <h3>All Selections</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {selections.map((selection) => (
              <li 
                key={selection._id}
                onClick={() => setSelectedSelection(selection)}
                style={{ 
                  cursor: 'pointer',
                  padding: '10px',
                  marginBottom: '5px',
                  backgroundColor: selectedSelection?._id === selection._id ? '#f0f0f0' : 'transparent',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
              >
                {selection.customerName || 'Anonymous'} - {new Date(selection.date).toLocaleDateString()}
                <div style={{ fontSize: '0.8em', color: '#666' }}>
                  {selection.images?.length || 0} images
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ width: '70%' }}>
          {selectedSelection ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3>
                  Selection Details: {selectedSelection.customerName || 'Anonymous'} - 
                  {new Date(selectedSelection.date).toLocaleDateString()}
                </h3>
                <button 
                  onClick={() => downloadSelection(selectedSelection)}
                  disabled={isDownloading || !selectedSelection.images?.length}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {isDownloading ? 'Downloading...' : 'Download All as ZIP'}
                </button>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Thumbnail</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Image Name</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Type</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSelection.images?.map((image: any) => (
                      <tr key={image.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '12px' }}>
                          <img 
                            src={image.thumbnailLink || image.webContentLink} 
                            alt={image.name}
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          />
                        </td>
                        <td style={{ padding: '12px' }}>{image.name}</td>
                        <td style={{ padding: '12px' }}>{image.mimeType?.split('/')[1]?.toUpperCase() || 'Unknown'}</td>
                        <td style={{ padding: '12px' }}>{(image.size / (1024 * 1024)).toFixed(2)} MB</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <p>Please select a customer selection to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionsViewer;