// components/ReviewSlider.tsx
import React, { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSlider: React.FC = () => {
  // Sample review data - in a real app, you'd fetch this from an API
  const reviews: Review[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent service! The team was very professional and delivered beyond our expectations.",
      date: "2024-05-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      comment: "Great work quality. Would definitely recommend to others looking for professional services.",
      date: "2024-04-28"
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 5,
      comment: "Outstanding results. The attention to detail was impressive and the communication was excellent throughout.",
      date: "2024-03-10"
    },
    {
      id: 4,
      name: "Neha Gupta",
      rating: 5,
      comment: "Absolutely thrilled with the outcome. Will be using their services again for future projects.",
      date: "2024-02-22"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate reviews
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-[#263f49] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experiences with us.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Review Card */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8 md:p-10 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="bg-[#263f49] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold">{reviews[currentIndex].name}</h3>
                <div className="flex items-center">
                  {renderStars(reviews[currentIndex].rating)}
                  <span className="ml-2 text-gray-500 text-sm">
                    {new Date(reviews[currentIndex].date).toLocaleDateString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">
              "{reviews[currentIndex].comment}"
            </p>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-[#263f49] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            &lt;
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-[#263f49] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            &gt;
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;