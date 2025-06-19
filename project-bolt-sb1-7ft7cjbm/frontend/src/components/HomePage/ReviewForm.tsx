import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiStar } from "react-icons/fi";
import { toast } from "react-toastify";

interface ReviewFormProps {
  onSubmitSuccess?: () => void; // Optional callback after successful submission
  className?: string; // Optional className for styling
}

interface ReviewFormData {
  name: string;
  email: string;
  phone: string;
  rating: number;
  message: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmitSuccess, className }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ReviewFormData>({
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

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
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

      await response.json();
      reset();
      toast.success("Review posted successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
      });

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to post review. Please try again.", {
        position: "bottom-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return (
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setValue("rating", star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
            disabled={isSubmitting}
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
            min: { value: 1, message: "Please select at least 1 star" },
          })}
        />
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Leave a Review</h2>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49]"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49]"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49]"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating *
              </label>
              {renderStars()}
              {errors.rating && (
                <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49]"
              rows={4}
              placeholder="Share your experience..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !currentMessage ||
                !currentRating ||
                !currentName ||
                !currentEmail
              }
              className={`px-6 py-2 rounded-md font-medium ${
                currentMessage && currentRating && currentName && currentEmail
                  ? "bg-[#263f49] text-white hover:bg-[#1a2d36]"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-colors duration-300`}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;