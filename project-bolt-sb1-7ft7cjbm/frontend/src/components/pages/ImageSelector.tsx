import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Select, Input, Form, message, Spin, Divider, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface DriveImage {
  id: string;
  name: string;
  thumbnailLink: string;
  webContentLink: string;
  size?: number;
  mimeType?: string;
}

interface DriveFolder {
  id: string;
  name: string;
}

const { Option } = Select;
const { TextArea } = Input;

const ImageSelector = () => {
  const [rootFolders, setRootFolders] = useState<any[]>([]);
  const [subFolders, setSubFolders] = useState<any[]>([]);
  const [selectedRootFolder, setSelectedRootFolder] = useState<any>(null);
  const [selectedSubFolder, setSelectedSubFolder] = useState<any>(null);
  const [images, setImages] = useState<DriveImage[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchRootFolders();
  }, []);

  const fetchRootFolders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://abeer.onrender.com/api/folders/roots');
      setRootFolders(response.data);
    } catch (error) {
      message.error('Failed to load folders');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubFolders = async (folderId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://abeer.onrender.com/api/folders/${folderId}/subfolders`);
      setSubFolders(response.data);
      setSelectedSubFolder(null);
      setImages([]);
    } catch (error) {
      message.error('Failed to load subfolders');
      setSubFolders([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchFolderImages = async (folderId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://abeer.onrender.com/api/folders/${folderId}/contents`);
      if (response.data.files) {
        setImages(response.data.files.map((file: any) => ({
          id: file.id,
          name: file.name,
          thumbnailLink: file.thumbnailLink,
          webContentLink: file.webContentLink,
          size: file.size,
          mimeType: file.mimeType
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
        folderId: selectedSubFolder?._id || selectedRootFolder?._id,
        folderUrl: selectedSubFolder?.url || selectedRootFolder?.url,
        folderName: selectedSubFolder?.name || selectedRootFolder?.name
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
        <Row gutter={16}>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select main folder"
              onChange={(value) => {
                const folder = rootFolders.find(f => f._id === value);
                setSelectedRootFolder(folder);
                if (folder) fetchSubFolders(folder._id);
              }}
              value={selectedRootFolder?._id}
              loading={loading}
            >
              {rootFolders.map(folder => (
                <Option key={folder._id} value={folder._id}>
                  {folder.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select subfolder (optional)"
              onChange={(value) => {
                const folder = subFolders.find(f => f._id === value);
                setSelectedSubFolder(folder);
                if (folder) fetchFolderImages(folder._id);
              }}
              value={selectedSubFolder?._id}
              loading={loading}
              disabled={!selectedRootFolder || subFolders.length === 0}
            >
              {subFolders.map(folder => (
                <Option key={folder._id} value={folder._id}>
                  {folder.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Card>

      {(selectedRootFolder && (selectedSubFolder || subFolders.length === 0)) && (
        <>
          <Card 
            title={`Images in ${selectedSubFolder?.name || selectedRootFolder.name}`}
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
                      borderColor: selectedImages.includes(image.id) ? 'red' : '#f0f0f0'
                    }}
                  >
                    <Card.Meta 
                      title={image.name.length > 20 
                        ? `${image.name.substring(0, 20)}...` 
                        : image.name
                      }
                      description={`${(image.size / (1024 * 1024)).toFixed(2)} MB`}
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