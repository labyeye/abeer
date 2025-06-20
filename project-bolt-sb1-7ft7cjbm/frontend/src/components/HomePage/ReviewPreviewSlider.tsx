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
  const sliderRef = useRef<HTMLDivElement>(null);
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
      intervalRef.current = setInterval(goToNext, 1800);
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, 5000);
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

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#263f49]">
        Customer Reviews
      </h2>
      
      <div className="relative">
        {/* Slider container */}
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div 
              key={review._id} 
              className="w-full flex-shrink-0 px-4"
            >
              <ReviewCard 
                review={review} 
                renderStars={renderStars}
                className={`mx-auto max-w-md ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        {reviews.length > 1 && (
          <>
            <button 
              onClick={goToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FiChevronLeft className="w-6 h-6 text-[#263f49]" />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FiChevronRight className="w-6 h-6 text-[#263f49]" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#263f49] w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Review Card Component
const ReviewCard: React.FC<{ 
  review: Review; 
  renderStars: (rating: number) => React.ReactNode; 
  className?: string 
}> = ({ review, renderStars, className = '' }) => {
  return (
    <div className={`bg-white h-64 w-64 rounded-xl p-6 shadow-md transition-all duration-300 flex flex-col ${className}`}>
  {/* Avatar and header section - unchanged */}
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
  
  {/* Review message section with better spacing */}
  <div className="flex-grow overflow-y-auto pt-2 pb-2">
    <p className="text-gray-700 italic leading-snug">"{review.message}"</p>
  </div>
</div>
  );
};

export default ReviewPreviewSlider;