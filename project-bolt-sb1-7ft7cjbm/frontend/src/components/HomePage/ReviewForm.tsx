import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiStar, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

interface ReviewFormProps {
  onSubmitSuccess?: () => void;
  className?: string;
  initialRating?: number;
  onClose?: () => void; // New prop for closing the form
}

interface ReviewFormData {
  name: string;
  email: string;
  phone: string;
  rating: number;
  message: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ 
  onSubmitSuccess, 
  className,
  initialRating = 0,
  onClose
}) => {
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
      rating: initialRating,
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
      const response = await fetch("https://abeer.onrender.com/api/reviews", {
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

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to submit review");
      }

      reset();
      toast.success("Thank you for your review!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-green-50 text-green-800",
      });

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error: any) {
      console.error("Error submitting review:", error);
      toast.error(error.message || "Failed to post review. Please try again.", {
        position: "bottom-center",
        className: "bg-red-50 text-red-800",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (size: 'sm' | 'md' | 'lg' = 'md') => {
    const starSize = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8'
    }[size];

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setValue("rating", star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none transition-transform hover:scale-110"
            disabled={isSubmitting}
            aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
          >
            <FiStar
              className={`${starSize} ${
                star <= (hoverRating || currentRating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              } transition-colors`}
            />
          </button>
        ))}
        <input
          type="hidden"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 1, message: "Please select at least 1 star" },
            max: { value: 5, message: "Maximum rating is 5 stars" },
          })}
        />
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden relative ${className}`}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close review form"
        >
          <FiX className="w-5 h-5" />
        </button>
      )}
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Share Your Experience</h2>
        <p className="text-gray-600 mb-6">We value your feedback to help us improve our services.</p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you rate your experience? *
            </label>
            {renderStars('lg')}
            {errors.rating && (
              <p className="mt-2 text-sm text-red-600">{errors.rating.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name *
              </label>
              <input
                {...register("name", { 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name should be at least 2 characters"
                  }
                })}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49] focus:border-transparent transition-all"
                disabled={isSubmitting}
                placeholder="Your name"
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
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49] focus:border-transparent transition-all"
                disabled={isSubmitting}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone (Optional)
            </label>
            <input
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-() ]+$/,
                  message: "Please enter a valid phone number",
                },
              })}
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49] focus:border-transparent transition-all"
              disabled={isSubmitting}
              placeholder="+1 (123) 456-7890"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Review *
            </label>
            <textarea
              {...register("message", {
                required: "Please share your experience",
                minLength: {
                  value: 10,
                  message: "Review should be at least 10 characters"
                },
                maxLength: {
                  value: 500,
                  message: "Review should not exceed 500 characters"
                }
              })}
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263f49] focus:border-transparent transition-all"
              rows={5}
              placeholder="Tell us about your experience..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {currentMessage.length}/500 characters
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose?.();
              }}
              disabled={isSubmitting}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !currentMessage ||
                !currentRating ||
                !currentName ||
                !currentEmail
              }
              className={`px-6 py-3 rounded-md font-medium ${
                currentMessage && currentRating && currentName && currentEmail
                  ? "bg-[#263f49] text-white hover:bg-[#1a2d36] shadow-md"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-all duration-300 transform hover:scale-105`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Review"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;