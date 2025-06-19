import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Select, Input, Form, message, Spin, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface DriveImage {
  id: string;
  name: string;
  thumbnailLink: string;
  webContentLink: string;
}

const { Option } = Select;
const { TextArea } = Input;

const ImageSelector = () => {
  const [folders, setFolders] = useState<any[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const [images, setImages] = useState<DriveImage[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://abeer.onrender.com/api/folders');
      setFolders(response.data);
    } catch (error) {
      message.error('Failed to load folders');
    } finally {
      setLoading(false);
    }
  };

  const fetchFolderImages = async (folderId: string) => {
  setLoading(true);
  try {
    const response = await axios.get(`https://abeer.onrender.com/api/folders/${folderId}/contents`);
    if (response.data && response.data.files) {
      setImages(response.data.files.map((file: any) => ({
        id: file.id,
        name: file.name,
        thumbnailLink: file.thumbnailLink,
        webContentLink: file.webContentLink
      })));
    } else {
      setImages([]);
      message.warning('No images found in this folder');
    }
  } catch (error) {
    message.error('Failed to load images');
    setImages([]);
  } finally {
    setLoading(false);
  }
};

  const toggleImageSelection = (imageId: string) => {
    setSelectedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId) 
        : [...prev, imageId]
    );
  };

  const handleSubmit = async (values: any) => {
    try {
      const selectedImageDetails = images.filter(img => selectedImages.includes(img.id));
      await axios.post('https://abeer.onrender.com/api/selections', {
        ...values,
        images: selectedImageDetails,
        folderId: selectedFolder._id,
        folderUrl: selectedFolder.url
      });
      
      message.success('Your selection has been submitted successfully!');
      form.resetFields();
      setSelectedImages([]);
    } catch (error) {
      message.error('Failed to submit selection');
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Select Your Images</h1>
      
      <Card title="Select Folder" style={{ marginBottom: '24px' }}>
        <Select
          style={{ width: '100%' }}
          placeholder="Select a folder"
          onChange={(value) => {
            const folder = folders.find(f => f._id === value);
            setSelectedFolder(folder);
            if (folder) fetchFolderImages(folder._id);
          }}
          value={selectedFolder?._id}
          loading={loading}
        >
          {folders.map(folder => (
            <Option key={folder._id} value={folder._id}>
              {folder.url}
            </Option>
          ))}
        </Select>
      </Card>

      {selectedFolder && (
        <>
          <Card 
            title={`Images in ${selectedFolder.url}`}
            style={{ marginBottom: '24px' }}
            loading={loading}
          >
            {images.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                {loading ? <Spin /> : 'No images found in this folder'}
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                {images.map(image => (
                  <Card
                    key={image.id}
                    hoverable
                    cover={
                      <img
                        alt={image.name}
                        src={image.thumbnailLink || image.webContentLink}
                        style={{ 
                          height: '180px',
                          objectFit: 'cover'
                        }}
                      />
                    }
                    onClick={() => toggleImageSelection(image.id)}
                    style={{
                      cursor: 'pointer',
                      borderColor: selectedImages.includes(image.id) ? '#1890ff' : '#f0f0f0'
                    }}
                  >
                    <Card.Meta 
                      title={image.name.length > 20 
                        ? `${image.name.substring(0, 20)}...` 
                        : image.name
                      }
                    />
                  </Card>
                ))}
              </div>
            )}
          </Card>

          <Card title="Submit Your Selection">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                label="Your Name"
                name="customerName"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="customerEmail"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Notes"
                name="notes"
              >
                <TextArea rows={4} placeholder="Any additional notes..." />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={selectedImages.length === 0}
                  size="large"
                  block
                >
                  {selectedImages.length > 0 
                    ? `Submit Selection (${selectedImages.length} images selected)`
                    : 'Select images to submit'
                  }
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </>
      )}
    </div>
  );
};

export default ImageSelector;