import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiHeart, FiMessageCircle, FiSend, FiStar } from "react-icons/fi";
import Navbar from "../HomePage/Navbar";

interface Review {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  rating: number;
  createdAt: string;
  likes: number;
  comments: string[];
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoverRating, setHoverRating] = useState(0);
  const [activeTab, setActiveTab] = useState("recent");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      rating: 0,
      message: "",
    },
  });

  const currentRating = watch("rating");
  const currentMessage = watch("message");
  const currentName = watch("name");
  const currentEmail = watch("email");
  const currentPhone = watch("phone");

  // Fetch reviews from backend
  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:2500/api/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Review[] = await response.json();
        setReviews(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
        toast.error("Failed to load reviews. Please try again later.", {
          position: "bottom-center",
        });
      }
    };

    fetchReviews();
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:2500/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          rating: data.rating,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const savedReview = await response.json();
      
      // Add the new review to the state
      setReviews([savedReview, ...reviews]);
      reset();
      
      toast.success("Review posted successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          backgroundColor: "#25D366",
          color: "white",
        },
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to post review. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  const handleLike = (id: string) => {
    setReviews(
      reviews.map((review) =>
        review._id === id ? { ...review, likes: (review.likes || 0) + 1 } : review
      )
    );
  };

  const renderStars = (rating: number, size = "md") => {
    const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Sort reviews based on active tab
  const sortedReviews = [...reviews].sort((a, b) => {
    if (activeTab === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return (b.rating - a.rating) || (b.likes - a.likes);
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#263f49]">
      {/* Header */}
      <header className="bg-[#263f49] shadow-sm sticky top-16 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "recent"
                  ? "text-pink-600 border-b-2 border-pink-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("recent")}
            >
              Recent
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "top"
                  ? "text-pink-600 border-b-2 border-pink-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("top")}
            >
              Top Rated
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Create Review Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 mt-16">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Leave a Review
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9+\-() ]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setValue("rating", star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <FiStar
                          className={`w-6 h-6 ${
                            star <= (hoverRating || currentRating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <input
                      type="hidden"
                      {...register("rating", {
                        required: "Rating is required",
                      })}
                    />
                  </div>
                  {errors.rating && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.rating.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Review *
                </label>
                <textarea
                  {...register("message", {
                    required: "Review text is required",
                  })}
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={4}
                  placeholder="Share your experience..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={
                    !currentMessage ||
                    !currentRating ||
                    !currentName ||
                    !currentEmail
                  }
                  className={`px-6 py-2 rounded-md font-medium ${
                    currentMessage &&
                    currentRating &&
                    currentName &&
                    currentEmail
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Reviews Feed */}
        <div className="space-y-6">
          {sortedReviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No reviews yet. Be the first to share your experience!
              </p>
            </div>
          ) : (
            sortedReviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Review Header */}
                <div className="p-4 flex items-center space-x-3 border-b border-gray-100">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <div className="flex items-center">
                      {renderStars(review.rating, "sm")}
                      <span className="ml-2 text-xs text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-4">
                  <p className="text-gray-800 mb-2">{review.message}</p>
                  
                </div>

                {/* Review Actions */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(review._id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-pink-600"
                    >
                      <FiHeart className="w-5 h-5" />
                      <span>{review.likes || 0}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                      <FiMessageCircle className="w-5 h-5" />
                      <span>{review.comments?.length || 0}</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FiSend className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;