import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "../assets/images/logoblack.png";

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
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-[#d1d5db]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center justify-center mb-6 min-h-[60px]">
              <img src={logo} className="h-[96px] w-auto" />
            </div>

            <p className="text-gray-600 mb-6">
              Professional photography services capturing life's most precious
              moments with artistic vision and technical excellence.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-[#263f49] text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Cinematography
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Live Streaming
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Audio Studio
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Post Production
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Filmmaking
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Camping
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Government Tander
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className={hoverLinkStyle}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#263f49] text-lg font-semibold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Event Coverage
                </a>
              </li>
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Commercial Photography
                </a>
              </li>
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Video Production
                </a>
              </li>
              <li>
                <a href="#" className={hoverLinkStyle}>
                  Photo Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
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

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Abeer Motion Picture Pvt Ltd. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
