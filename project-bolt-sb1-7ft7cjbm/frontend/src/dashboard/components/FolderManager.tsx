import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Input, Select, message, Form, Row, Col } from "antd";

const FolderManager = () => {
  const [form] = Form.useForm();
  const [rootFolders, setRootFolders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [parentFolders, setParentFolders] = useState<any[]>([]);

  useEffect(() => {
    fetchRootFolders();
    fetchAllFolders();
  }, []);

  const fetchRootFolders = async () => {
    try {
      const response = await axios.get("https://abeer.onrender.com/api/folders/roots");
      setRootFolders(response.data);
    } catch (error) {
      message.error("Failed to load root folders");
    }
  };

  const fetchAllFolders = async () => {
    try {
      const response = await axios.get("https://abeer.onrender.com/api/folders");
      setParentFolders(response.data);
    } catch (error) {
      console.error("Error fetching all folders:", error);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      const folderId = extractFolderId(values.url);
      
      await axios.post("https://abeer.onrender.com/api/folders", {
        name: values.name,
        url: values.url,
        folderId,
        parentFolderId: values.parentFolderId,
        isRoot: !values.parentFolderId // If no parent, it's a root folder
      });

      message.success("Folder added successfully!");
      form.resetFields();
      fetchRootFolders();
      fetchAllFolders();
    } catch (error) {
      message.error("Error adding folder");
    } finally {
      setLoading(false);
    }
  };

  const extractFolderId = (url: string) => {
    if (!url) return null;

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

    const idPattern = /^[a-zA-Z0-9_-]+$/;
    if (idPattern.test(url)) {
      return url;
    }

    return null;
  };

  const deleteFolder = async (folderId: string) => {
    try {
      setLoading(true);
      await axios.delete(`https://abeer.onrender.com/api/folders/${folderId}`);
      message.success("Folder deleted successfully");
      fetchRootFolders();
      fetchAllFolders();
    } catch (error) {
      message.error("Failed to delete folder");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card title="Add New Folder" style={{ marginBottom: "24px" }}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Folder Name"
                name="name"
                rules={[{ required: true, message: "Please enter folder name" }]}
              >
                <Input placeholder="e.g., Rahul Wedding" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Parent Folder (optional)"
                name="parentFolderId"
              >
                <Select
                  placeholder="Select parent folder"
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.children as string).toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {parentFolders.map((folder) => (
                    <Select.Option key={folder._id} value={folder._id}>
                      {folder.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Google Drive Folder URL or ID"
            name="url"
            rules={[{ required: true, message: "Please enter folder URL" }]}
          >
            <Input placeholder="https://drive.google.com/drive/folders/..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add Folder
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Root Folders">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {rootFolders.map((folder) => (
            <Card
              key={folder._id}
              title={folder.name}
              extra={
                <Button
                  danger
                  size="small"
                  onClick={() => deleteFolder(folder._id)}
                  loading={loading}
                >
                  Delete
                </Button>
              }
            >
              <p style={{ wordBreak: "break-all" }}>
                <a href={folder.url} target="_blank" rel="noopener noreferrer">
                  {folder.url}
                </a>
              </p>
              <p>ID: {folder.folderId}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FolderManager;