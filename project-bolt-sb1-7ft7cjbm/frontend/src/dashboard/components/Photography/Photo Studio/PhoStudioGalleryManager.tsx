import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

type GalleryItem = {
  _id?: string;
  title: string;
  description: string;
  place: string;
  views: string;
  thumbnail: string;
  videoUrl: string;
  isFeatured: boolean;
};

const PhoSutdioGalleryManager = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [formData, setFormData] = useState<GalleryItem>({
    title: "",
    description: "",
    place: "",
    views: "0 views",
    thumbnail: "",
    videoUrl: "",
    isFeatured: false
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://abeer.onrender.com/api/pho-studio-gallery");
      setItems(response.data);
    } catch (error) {
      toast.error("Failed to fetch gallery items");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`https://abeer.onrender.com/api/pho-studio-gallery/${editingId}`, formData);
        toast.success("Gallery item updated successfully");
      } else {
        await axios.post("https://abeer.onrender.com/api/pho-studio-gallery", formData);
        toast.success("Gallery item added successfully");
      }
      setFormData({
        title: "",
        description: "",
        place: "",
        views: "0 views",
        thumbnail: "",
        videoUrl: "",
        isFeatured: false
      });
      setEditingId(null);
      fetchItems();
    } catch (error) {
      toast.error("Operation failed");
      console.error(error);
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setFormData(item);
    setEditingId(item._id || null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`https://abeer.onrender.com/api/pho-studio-gallery/${id}`);
        toast.success("Gallery item deleted successfully");
        fetchItems();
      } catch (error) {
        toast.error("Failed to delete gallery item");
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Wedding Gallery Manager</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Gallery Item" : "Add New Gallery Item"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Place</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
              <input
                type="text"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Views</label>
              <input
                type="text"
                name="views"
                value={formData.views}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleCheckboxChange}
                className="mr-2"
                id="isFeatured"
              />
              <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">
                Featured Item
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {editingId ? "Update Item" : "Add Item"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: "",
                  description: "",
                  place: "",
                  views: "0 views",
                  thumbnail: "",
                  videoUrl: "",
                  isFeatured: false
                });
                setEditingId(null);
              }}
              className="ml-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Gallery Items</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thumbnail</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item.thumbnail} alt={item.title} className="h-12 w-20 object-cover" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.place}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isFeatured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.isFeatured ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id!)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoSutdioGalleryManager;