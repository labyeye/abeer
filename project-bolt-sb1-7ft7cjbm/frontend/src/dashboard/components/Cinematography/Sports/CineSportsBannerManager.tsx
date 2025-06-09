import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface SportsBanner {
  _id: string;
  title: string;
  description: string;
  backgroundImageUrl: string;
  isActive: boolean;
  createdAt: string;
}

const CineSportsBannerManager = () => {
  const [banners, setBanners] = useState<SportsBanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    backgroundImageUrl: "",
    isActive: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") ||
      localStorage.getItem("token") ||
      sessionStorage.getItem("authToken") ||
      sessionStorage.getItem("token");

    if (token) {
      setAuthToken(token);
    } else {
      toast.error("No authentication token found. Please login first.");
    }
  }, []);

  useEffect(() => {
    if (authToken) {
      fetchBanners();
    }
  }, [authToken]);

  const getAuthHeaders = () => {
    if (!authToken) {
      toast.error("No authentication token available");
      return {};
    }
    return {
      Authorization: `Bearer ${authToken}`,
      "x-auth-token": authToken,
      token: authToken,
      "Content-Type": "application/json",
    };
  };

  const fetchBanners = async () => {
    if (!authToken) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://abeer.onrender.com/api/cine-sports-banner",
        {
          headers: getAuthHeaders(),
        }
      );
      const bannersData = Array.isArray(response.data) ? response.data : [];
      setBanners(bannersData);
    } catch (error: any) {
      console.error("Error fetching banners:", error);
      if (error.response?.status === 401) {
        toast.error("Authentication failed. Please login again.");
        localStorage.removeItem("authToken");
        localStorage.removeItem("token");
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("token");
        setAuthToken("");
      } else {
        toast.error("Failed to fetch banners");
      }
      setBanners([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, isActive: e.target.checked }));
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tokenInput = (e.target as HTMLFormElement).token.value;
    if (tokenInput.trim()) {
      setAuthToken(tokenInput.trim());
      localStorage.setItem("authToken", tokenInput.trim());
      toast.success("Token saved. Fetching banners...");
    }
  };

  const isValidImageUrl = (url: string) => {
    try {
      new URL(url);
      return true; // Don't restrict by file extension
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!authToken) {
      toast.error("Please provide authentication token first");
      return;
    }
    if (!isValidImageUrl(formData.backgroundImageUrl)) {
      toast.error(
        "Please enter a valid image URL (jpg, jpeg, png, webp, gif, svg)"
      );
      return;
    }

    try {
      if (editingId) {
        await axios.put(
          `https://abeer.onrender.com/api/cine-sports-banner/${editingId}`,
          formData,
          {
            headers: getAuthHeaders(),
          }
        );
        toast.success("Banner updated successfully");
      } else {
        await axios.post(
          "https://abeer.onrender.com/api/cine-sports-banner",
          formData,
          {
            headers: getAuthHeaders(),
          }
        );
        toast.success("Banner created successfully");
      }
      resetForm();
      fetchBanners();
    } catch (error: any) {
      console.error("Error saving banner:", error);
      if (error.response?.status === 401) {
        toast.error("Authentication failed. Please check your token.");
      } else {
        toast.error(
          `Failed to save banner: ${
            error.response?.data?.message || error.message
          }`
        );
      }
    }
  };

  const handleEdit = (banner: SportsBanner) => {
    setFormData({
      title: banner.title,
      description: banner.description,
      backgroundImageUrl: banner.backgroundImageUrl,
      isActive: banner.isActive,
    });
    setEditingId(banner._id);
  };

  const handleDelete = async (id: string) => {
    if (!authToken) {
      toast.error("Please provide authentication token first");
      return;
    }

    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await axios.delete(
          `https://abeer.onrender.com/api/cine-sports-banner/${id}`,
          {
            headers: getAuthHeaders(),
          }
        );
        toast.success("Banner deleted successfully");
        fetchBanners();
      } catch (error: any) {
        console.error("Error deleting banner:", error);
        if (error.response?.status === 401) {
          toast.error("Authentication failed. Please check your token.");
        } else {
          toast.error("Failed to delete banner");
        }
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      backgroundImageUrl: "",
      isActive: false,
    });
    setEditingId(null);
  };

  if (loading) return <div className="flex justify-center p-8">Loading...</div>;

  if (!authToken) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-4">
            Please enter your authentication token to manage banners:
          </p>
          <form onSubmit={handleTokenSubmit}>
            <input
              type="text"
              name="token"
              placeholder="Enter your auth token"
              className="w-full px-3 py-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Set Token
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sports Banner Manager</h1>
        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            setAuthToken("");
          }}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Banner" : "Create New Banner"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                name="backgroundImageUrl"
                value={formData.backgroundImageUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
              rows={3}
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="isActive">Set as active banner</label>
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {editingId ? "Update Banner" : "Create Banner"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Existing Banners ({banners.length})
        </h2>
        {banners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {banners.map((banner) => (
              <div
                key={banner._id}
                className="border rounded-lg overflow-hidden"
              >
                <div className="h-48 relative bg-gray-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${banner.backgroundImageUrl})`,
                    }}
                  >
                    <img
                      src={banner.backgroundImageUrl}
                      alt=""
                      className="hidden"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement!.style.backgroundImage =
                          "linear-gradient(to right, #263f49, #2d4b58)";
                      }}
                    />
                  </div>
                  {!banner.backgroundImageUrl && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{banner.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {banner.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm font-medium ${
                        banner.isActive ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {banner.isActive ? "✓ Active" : "○ Inactive"}
                    </span>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(banner)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(banner._id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            No banners found. Create your first banner above!
          </p>
        )}
      </div>
    </div>
  );
};

export default CineSportsBannerManager;
