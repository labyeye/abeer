import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Modal } from "./Modal";
interface CategoryImage {
  id: number;
  image: string;
  title: string;
  video?: string;
  link?: string;
}

interface Category {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: CategoryImage[];
  order: number;
}

const API_BASE_URL = "http://localhost:2500/api/categories";

const createAuthAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const CategoryShowcaseManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Category, "_id" | "order">>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      images: Array(5)
        .fill(null)
        .map((_, index) => ({
          id: index + 1,
          image: "",
          title: "",
          video: "",
          link: "",
        })),
    },
  });
  const {
    register: registerEdit,
    handleSubmit: handleEditSubmit,
    reset: resetEdit,
    formState: { errors: editErrors },
    setValue: setEditValue,
  } = useForm<Category>();

  const handleEditClick = (category: Category) => {
    setEditingCategory(category);
    setIsEditModalOpen(true);

    // Set form values for editing
    setEditValue("_id", category._id);
    setEditValue("title", category.title);
    setEditValue("description", category.description);
    setEditValue("category", category.category);
    setEditValue("order", category.order);
    setEditValue("images", category.images);
  };
  const onSubmitEdit = async (formData: Category) => {
    try {
      setIsSubmitting(true);
      const authAxios = createAuthAxios();

      // Clean images data
      const cleanedImages = formData.images.map((img) => ({
        id: img.id,
        image: img.image?.trim() || "",
        title: img.title?.trim() || "",
        video: img.video?.trim() || "",
        link: img.link?.trim() || "",
      }));

      const { data } = await authAxios.patch(`/${formData._id}`, {
        ...formData,
        images: cleanedImages,
      });

      toast.success("Category updated successfully");
      fetchCategories(); // Refresh the list
      setIsEditModalOpen(false);
    } catch (error) {
      handleApiError(error, "Failed to update category");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(API_BASE_URL);
      setCategories(
        Array.isArray(data) ? data.sort((a, b) => a.order - b.order) : []
      );
    } catch (error) {
      toast.error("Failed to fetch categories");
      console.error("Fetch error:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = async (formData: Omit<Category, "_id" | "order">) => {
    try {
      setIsSubmitting(true);
      const authAxios = createAuthAxios();

      // Ensure all image fields are properly formatted
      const cleanedImages = formData.images.map((img) => ({
        id: img.id,
        image: img.image?.trim() || "", // Ensure empty string instead of undefined
        title: img.title?.trim() || "",
        video: img.video?.trim() || "",
        link: img.link?.trim() || "",
      }));

      // Don't filter before saving - save all, filter when displaying
      const { data } = await authAxios.post("/", {
        ...formData,
        images: cleanedImages,
      });

      console.log("Server response:", data); // Debug what's returned
      toast.success("Category added successfully");
      reset();
      fetchCategories(); // Force refresh from server
    } catch (error) {
      handleApiError(error, "Failed to add category");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      const authAxios = createAuthAxios();
      await authAxios.delete(`/${id}`);
      toast.success("Category deleted successfully");
      setCategories((prev) => prev.filter((cat) => cat._id !== id));
    } catch (error) {
      handleApiError(error, "Failed to delete category");
    }
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategories(
      items.map((item, index) => ({
        ...item,
        order: index,
      }))
    );

    try {
      const authAxios = createAuthAxios();
      await authAxios.post(`${API_BASE_URL}/reorder`, {
        orderedIds: items.map((item) => item._id),
      });
    } catch (error) {
      toast.error("Failed to save new order");
      fetchCategories(); // Revert to server state
    }
  };

  const handleApiError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        toast.error("Unauthorized - Please login again");
      } else {
        toast.error(error.response?.data?.message || defaultMessage);
      }
    } else {
      toast.error(defaultMessage);
    }
    console.error("API Error:", error);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Add New Category</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category Type *
              </label>
              <input
                type="text"
                {...register("category", {
                  required: "Category type is required",
                })}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description *
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">
              Category Media (At least 1 image or video required)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-3">Media {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Image URL (or Video URL below)
                      </label>
                      <input
                        type="text"
                        {...register(`images.${index}.image`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Video URL (optional)
                      </label>
                      <input
                        type="text"
                        {...register(`images.${index}.video`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://example.com/video.mp4"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Link URL (optional)
                      </label>
                      <input
                        type="text"
                        {...register(`images.${index}.link`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        {...register(`images.${index}.title`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition disabled:opacity-50"
            >
              {isSubmitting ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Categories</h2>
        {categories.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No categories found. Add your first category above.
          </div>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="categories">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {categories.map((category, index) => (
                    <Draggable
                      key={category._id}
                      draggableId={category._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                        >
                          <div className="flex items-center justify-between p-4">
                            <div
                              className="flex items-center space-x-4"
                              {...provided.dragHandleProps}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400 cursor-move"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 8h16M4 16h16"
                                />
                              </svg>
                              <div>
                                <h3 className="font-medium">
                                  {category.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {category.category}
                                </p>
                                <p className="text-sm text-gray-500 line-clamp-1">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditClick(category)}
                                className="text-blue-600 hover:text-blue-800 px-3 py-1"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(category._id)}
                                className="text-red-600 hover:text-red-800 px-3 py-1"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-3 bg-white">
                            <h4 className="text-sm font-medium mb-2">Media:</h4>
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                              {category.images
                                .filter((img) => img.image?.trim())
                                .map((img) => (
                                  <div
                                    key={img.id}
                                    className="relative h-12 w-12 rounded border border-gray-200 overflow-hidden"
                                  >
                                    <img
                                      src={img.image}
                                      alt={img.title}
                                      className="h-full w-full object-cover"
                                      onError={(e) => {
                                        (
                                          e.target as HTMLImageElement
                                        ).style.display = "none";
                                      }}
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
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
      {isEditModalOpen && editingCategory && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Edit Category</h2>
            <form
              onSubmit={handleEditSubmit(onSubmitEdit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    {...registerEdit("title", {
                      required: "Title is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md ${
                      editErrors.title ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {editErrors.title && (
                    <p className="mt-1 text-sm text-red-600">
                      {editErrors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Category Type *
                  </label>
                  <input
                    type="text"
                    {...registerEdit("category", {
                      required: "Category type is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md ${
                      editErrors.category ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {editErrors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {editErrors.category.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description *
                </label>
                <textarea
                  {...registerEdit("description", {
                    required: "Description is required",
                  })}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md ${
                    editErrors.description
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {editErrors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {editErrors.description.message}
                  </p>
                )}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">
                  Category Media (At least 1 image or video required)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium mb-3">Media {index + 1}</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Image URL (or Video URL below)
                          </label>
                          <input
                            type="text"
                            {...registerEdit(`images.${index}.image`)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Video URL (optional)
                          </label>
                          <input
                            type="text"
                            {...registerEdit(`images.${index}.video`)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://example.com/video.mp4"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Link URL (optional)
                          </label>
                          <input
                            type="text"
                            {...registerEdit(`images.${index}.link`)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            {...registerEdit(`images.${index}.title`)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition disabled:opacity-50"
                >
                  {isSubmitting ? "Updating..." : "Update Category"}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
