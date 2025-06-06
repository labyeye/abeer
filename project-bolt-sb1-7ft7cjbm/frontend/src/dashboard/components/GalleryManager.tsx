import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface GalleryImage {
  _id: string;
  category: string;
  image: string;
  title: string;
  height: number;
  order: number;
}

// Create authenticated axios instance
const createAuthAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://abeer.onrender.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm<Omit<GalleryImage, "_id" | "order">>();
  const categories = ["portrait", "creative", "nature", "video"];

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://abeer.onrender.com/api/gallery");
      setImages(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to fetch images");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: Omit<GalleryImage, "_id" | "order">) => {
    try {
      const authAxios = createAuthAxios();
      await authAxios.post("/gallery", data);
      toast.success("Image added successfully");
      reset();
      fetchImages();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Unauthorized - Please login again");
        } else {
          toast.error(error.response?.data?.message || "Failed to add image");
        }
      } else {
        toast.error("Failed to add image");
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const authAxios = createAuthAxios();
      await authAxios.delete(`/gallery/${id}`);
      toast.success("Image deleted successfully");
      fetchImages();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Unauthorized - Please login again");
        } else {
          toast.error(error.response?.data?.message || "Failed to delete image");
        }
      } else {
        toast.error("Failed to delete image");
      }
    }
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.showerce.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);

    try {
      const authAxios = createAuthAxios();
      await authAxios.post("/gallery/reorder", {
        orderedIds: items.map((item) => item._id),
      });
      toast.success("Images reordered successfully");
    } catch (error) {
      toast.error("Failed to reorder images");
      fetchImages(); // Revert if error
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full px-3 py-2 border rounded-md"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Height</label>
              <select
                {...register("height", { 
                  required: "Height is required",
                  valueAsNumber: true 
                })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value={1}>Normal</option>
                <option value={2}>Tall</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Image
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Manage Images</h2>
        {images.length === 0 ? (
          <p className="text-gray-500">No images found</p>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="images">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {images.map((image, index) => (
                    <Draggable key={image._id} draggableId={image._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex items-center justify-between p-4 mb-2 border rounded-md bg-gray-50"
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={image.image}
                              alt={image.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium">{image.title}</h3>
                              <p className="text-sm text-gray-600">
                                {image.category} • Height: {image.height}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(image._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};