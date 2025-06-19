import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Slide {
  _id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
}

const createAuthAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://abeer.onrender.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const HeroSliderManager = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm<Omit<Slide, "_id" | "order">>();

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://abeer.onrender.com/api/slides");
      setSlides(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to fetch slides");
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: Omit<Slide, "_id" | "order">) => {
    try {
      const authAxios = createAuthAxios();
      await authAxios.post("/slides", data);
      toast.success("Slide added successfully");
      reset();
      fetchSlides();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Unauthorized - Please login again");
        } else {
          toast.error(error.response?.data?.message || "Failed to add slide");
        }
      } else {
        toast.error("Failed to add slide");
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const authAxios = createAuthAxios();
      await authAxios.delete(`https://abeer.onrender.com/api/slides/${id}`);
      toast.success("Slide deleted successfully");
      fetchSlides();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Unauthorized - Please login again");
        } else {
          toast.error(error.response?.data?.message || "Failed to delete slide");
        }
      } else {
        toast.error("Failed to delete slide");
      }
    }
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(slides);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSlides(items);

    try {
      const authAxios = createAuthAxios();
      await authAxios.post("https://abeer.onrender.com/api/slides/reorder", {
        orderedIds: items.map((item) => item._id),
      });
      toast.success("Slides reordered successfully");
    } catch (error) {
      toast.error("Failed to reorder slides");
      fetchSlides(); // Revert if error
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Slide</h2>
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
          <div>
            <label className="block text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              {...register("subtitle", { required: "Subtitle is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Slide
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Manage Slides</h2>
        {slides.length === 0 ? (
          <p className="text-gray-500">No slides found</p>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="slides">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {slides.map((slide, index) => (
                    <Draggable key={slide._id} draggableId={slide._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex items-center justify-between p-4 mb-2 border rounded-md bg-gray-50"
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium">{slide.title}</h3>
                              <p className="text-sm text-gray-600">{slide.subtitle}</p>
                              <p className="text-sm text-gray-500 truncate max-w-md">{slide.description}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(slide._id)}
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