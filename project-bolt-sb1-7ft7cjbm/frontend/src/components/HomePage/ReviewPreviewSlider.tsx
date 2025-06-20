import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

interface Review {
  _id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
}

const ReviewPreviewSlider: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://abeer.onrender.com/api/reviews');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (reviews.length > 1) {
      intervalRef.current = setInterval(goToNext, 5000);
      return () => { if (intervalRef.current) clearInterval(intervalRef.current) };
    }
  }, [reviews.length, currentIndex]);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % reviews.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, 1500);
  };

  const renderStars = (rating: number) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map(star => (
        <FiStar
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  if (isLoading) return <div className="text-center py-12">Loading reviews...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
  if (reviews.length === 0) return <div className="text-center py-12">No reviews yet</div>;

  // Calculate adjacent indices
  const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextIndex = (currentIndex + 1) % reviews.length;

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#263f49]">
        Customer Reviews
      </h2>
      
      <div className="relative h-96">
        {/* Previous Review (left side) */}
        {reviews.length > 1 && (
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 opacity-70 scale-90 z-10">
            <ReviewCard 
              review={reviews[prevIndex]} 
              renderStars={renderStars}
              className="bg-gray-50"
            />
          </div>
        )}

        {/* Current Review (center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-2/3 z-20 shadow-lg">
          <ReviewCard 
            review={reviews[currentIndex]} 
            renderStars={renderStars}
            className="bg-white border-2 border-[#263f49]"
          />
        </div>

        {/* Next Review (right side) */}
        {reviews.length > 1 && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 opacity-70 scale-90 z-10">
            <ReviewCard 
              review={reviews[nextIndex]} 
              renderStars={renderStars}
              className="bg-gray-50"
            />
          </div>
        )}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetInterval();
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#263f49] w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Separate card component for cleaner code
const ReviewCard: React.FC<{ review: Review; renderStars: (rating: number) => React.ReactNode; className?: string }> = ({ 
  review, 
  renderStars,
  className = '' 
}) => {
  return (
    <div className={`rounded-xl p-6 transition-all ${className}`}>
      <div className="flex items-center mb-4">
        <div className="bg-[#263f49] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center">
            {renderStars(review.rating)}
            <span className="text-xs text-gray-500 ml-2">
              {new Date(review.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{review.message}"</p>
    </div>
  );
};

export default ReviewPreviewSlider;