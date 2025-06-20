import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { FiStar } from "react-icons/fi";
import logo from "../../assets/images/logoblack.png";
import ReviewForm from "./ReviewForm";

const hoverLinkStyle = `
  relative inline-block text-gray-700 transition-colors duration-300 cursor-pointer
  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-[#263f49]
  before:w-0 before:transition-[width] before:duration-300 hover:before:w-full
  hover:text-[#263f49]
  hover:translate-x-1
  transform transition-transform duration-300
`;
const socialIconClass = `
  p-2
  text-gray-800
  transition-colors duration-300
  hover:border-white hover:bg-black hover:text-white
`;

const Footer: React.FC = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    return (
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => {
              setRating(star);
              setShowReviewForm(true);
            }}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
          >
            <FiStar
              className={`w-5 h-5 ${
                star <= (hoverRating || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-[#d1d5db] relative">
      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowReviewForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <ReviewForm
              onSubmitSuccess={() => setShowReviewForm(false)}
              initialRating={rating}
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About - remains the same */}
          <div>
            <div className="flex items-center justify-center mb-6 min-h-[60px]">
              <img src={logo} className="h-[230px] w-auto" alt="Company Logo" />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://m.facebook.com/people/Abeer-Motion-Picture-Pvt-Ltd/61552202668767/"
                className={socialIconClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} stroke="currentColor" />
              </a>
              <a
                href="https://x.com/abeer_motion?lang=ar-x-fm"
                className={socialIconClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} stroke="currentColor" />
              </a>
              <a
                href="https://www.instagram.com/abeer_motion_picture/"
                className={socialIconClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} stroke="currentColor" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJQKvIkTun6sbTc0dRI6yTA"
                className={socialIconClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} stroke="currentColor" />
              </a>
              <a
                href="https://in.linkedin.com/in/abeer-motion-picture-337a14260"
                className={socialIconClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} stroke="currentColor" />
              </a>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-[#263f49] text-lg font-semibold mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li>
                    <a href="/" className={hoverLinkStyle}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className={hoverLinkStyle}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cinematography/wedding"
                      className={hoverLinkStyle}
                    >
                      Cinematography
                    </a>
                  </li>
                  <li>
                    <a href="/photography/wedding" className={hoverLinkStyle}>
                      Photography
                    </a>
                  </li>
                  <li>
                    <a href="/livestream" className={hoverLinkStyle}>
                      Live Streaming
                    </a>
                  </li>
                  <li>
                    <a
                      href="/audiostudio/production"
                      className={hoverLinkStyle}
                    >
                      Audio Studio
                    </a>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/postproduction/grading"
                      className={hoverLinkStyle}
                    >
                      Post Production
                    </a>
                  </li>
                  <li>
                    <a href="/cinematography/film" className={hoverLinkStyle}>
                      Filmmaking
                    </a>
                  </li>
                  <li>
                    <a href="/campaigning" className={hoverLinkStyle}>
                      Camping
                    </a>
                  </li>
                  <li>
                    <a href="/government" className={hoverLinkStyle}>
                      Government Tander
                    </a>
                  </li>

                  <li>
                    <a href="/image-selector" className={hoverLinkStyle}>
                      Image Selector
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services - remains the same */}
          <div>
            <ul className="space-y-3">
              <div>
                <h4 className="text-[#263f49] text-lg font-semibold mb-6">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/photography/wedding" className={hoverLinkStyle}>
                      Wedding Photography
                    </a>
                  </li>
                  <li>
                    <a href="/cinematography/event" className={hoverLinkStyle}>
                      Event Coverage
                    </a>
                  </li>
                  <li>
                    <a href="/photography/studio" className={hoverLinkStyle}>
                      Portrait Sessions
                    </a>
                  </li>
                  <li>
                    <a href="/photography/event" className={hoverLinkStyle}>
                      Commercial Photography
                    </a>
                  </li>
                  <li>
                    <a href="/postproduction/fcpx" className={hoverLinkStyle}>
                      Video Production
                    </a>
                  </li>
                  <li>
                    <a href="/photography/album" className={hoverLinkStyle}>
                      Photo Editing
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          {/* Newsletter with Rating */}
          <div>
            <div className="mb-6">
              <h4 className="text-[#263f49] text-lg font-semibold mb-2">
                Rate Our Service
              </h4>
              {renderStars()}
              <p className="text-sm text-gray-600 mt-1">
                Click on stars to leave a review
              </p>
            </div>

            <h4 className="text-[#263f49] text-lg font-semibold mb-6">
              Subscribe to Newsletter
            </h4>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest work and special offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-[#263f49]"
              />
              <button
                type="submit"
                className="relative bg-[#263f49] hover:bg-[#1b2e35] text-white rounded py-2 px-4 transition duration-300
                before:content-[''] before:absolute before:bottom-1.5 before:left-1/2 before:translate-x-[-50%]
                before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-1/2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Abeer Motion Pictures Pvt. Ltd.
            All rights reserved.
          </p>
          <p className="text-gray-500">
            Designed & Developed by{" "}
            <a
              href="https://pixelatenest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium hover:underline"
            >
              Pixelate Nest
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
