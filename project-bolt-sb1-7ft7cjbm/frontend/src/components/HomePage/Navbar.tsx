import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    {
      label: "Cinematography",
      dropdown: [
        {
          category: "Wedding",
          link: "/cinematography/wedding",
        },
        {
          category: "Pre Wedding",
          link: "/cinematography/prewedding",
        },
        {
          category: "Baby shower / Baby Shoot / Birthday",
          link: "/cinematography/babyshower",
        },
        {
          category: "Event",
          link: "/cinematography/event",
        },
        {
          category: "Advertising",
          link: "/cinematography/ad",
        },
        {
          category: "Sports (Cricket, Football, etc.)",
          link: "/cinematography/sports",
        },
        {
          category: "Political / Government Filmmaking",
          link: "/cinematography/political",
        },
        {
          category: "Cinema/Film",
          link: "/cinematography/film",
        },
      ],
    },
    {
      label: "Photography",
      dropdown: [
        {
          category: "Wedding",
          link: "/photography/wedding",
        },
        {
          category: "Pre Wedding",
          link: "/photography/prewedding",
        },
        {
          category: "Event",
          link: "/photography/event",
        },
        {
          category: "Baby shower / Baby Shoot / Birthday",
          link: "/photography/babyshower",
        },
        {
          category: "Modelling / Product Photography",
          link: "/photography/modelling",
        },
        {
          category: "Aerial Photography (Drone)",
          link: "/photography/aerial",
        },
        {
          category: "PhotoStudio",
          link: "/photography/studio",
        },
        {
          category: "Sports (Cricket, Football, etc.)",
          link: "/photography/sports",
        },
        {
          category: "Political / Government Event",
          link: "/photography/political",
        },
        {
          category: "Photobook (Album)",
          link: "/photography/album",
        },
      ],
    },

    {
      label: "Cine Equipment",
      dropdown: [
        {
          category: "Sony FX3",
          services: [
            "Cinema Camera Rental",
            "4K Recording",
            "Professional Video",
            "Documentary Production",
            "Wedding Cinematography",
            "Commercial Production",
            "Live Events",
            "Streaming Setup",
          ],
        },
        {
          category: "Sony FX6",
          services: [
            "Professional Cinema",
            "6K Recording",
            "Broadcast Quality",
            "Corporate Video",
            "Documentary Films",
            "Television Production",
            "Streaming Content",
            "Commercial Work",
          ],
        },
        {
          category: "Burano",
          services: [
            "8K Full Frame",
            "Venice Color Science",
            "Professional Cinema",
            "High-End Production",
            "Feature Films",
            "Commercial Production",
            "Broadcast TV",
            "Premium Content",
          ],
        },
        {
          category: "Venice 2",
          services: [
            "8.6K Full Frame",
            "Hollywood Standard",
            "Feature Film Production",
            "High-End Commercials",
            "Television Series",
            "Luxury Content",
            "Premium Documentation",
            "Cinema Quality",
          ],
        },
        {
          category: "Red Camera",
          services: [
            "High Resolution",
            "Professional Cinema",
            "Feature Films",
            "Commercial Advertising",
            "Music Videos",
            "Documentary Films",
            "Television Production",
            "Digital Cinema",
          ],
        },
      ],
    },
    {
      label: "Live Streaming",
      link: "/livestream", // Main category links to /livestream
      dropdown: [
        {
          category: "Political Event",
          services: [
            "Election Campaigning",
            "Press Conference",
            "Political Debate & Discussion",
            "Party Meetings & Announcements",
          ],
        },
        {
          category: "Religious & Cultural Programs",
          services: [
            "Bhagwat Katha, Ram Katha, Shiv Katha",
            "Jagran, Bhajan Sandhya",
            "Chhath Puja, Durga Puja, Navratri Events",
            "Pran Pratishtha & Mandir Mahotsav",
            "Eid, Christmas & Other Religious Gatherings",
          ],
        },
        {
          category: "Corporate & Educational",
          services: [
            "Business Conferences & Seminars",
            "Product Launch & Brand Promotion",
            "Educational Webinars & Workshops",
            "School/College Annual Functions & Convocations",
            "Award Ceremonies & Felicitation Events",
          ],
        },
        {
          category: "Entertainment & Public",
          services: [
            "Music Concerts & Live Shows",
            "Dance Competitions & Talent Shows",
            "Theatre & Drama Performances",
            "Sports Tournaments & Matches",
          ],
        },
        {
          category: "Government & Public Awareness",
          services: [
            "Sarkari Yojana Awareness Programs",
            "Government Meetings & Announcements",
            "Public Rallies & Protests",
            "Disaster Relief & Fundraising Events",
          ],
        },
        {
          category: "Sports",
          services: [
            "Cricket Matches",
            "Football Matches",
            "Kabaddi Tournaments",
            "Hockey Matches",
            "Volleyball & Basketball Matches",
            "School & College Sports Events",
            "Annual Sports Day",
            "Inter-School & Inter-College Tournaments",
            "University Level Matches",
          ],
        },
      ],
    },

    {
      label: "Audio Studio",
      dropdown: [
        {
          category: "Recording",
          services: [
            "Voice Over",
            "Music Recording",
            "Podcast Recording",
            "Audio Books",
            "Commercial Jingles",
            "Song Recording",
            "Instrument Recording",
            "Live Sessions",
          ],
        },
        {
          category: "Editing",
          services: [
            "Audio Cleanup",
            "Noise Reduction",
            "Audio Enhancement",
            "Voice Editing",
            "Music Editing",
            "Podcast Editing",
            "Radio Shows",
            "Commercial Audio",
          ],
        },
        {
          category: "Mixing",
          services: [
            "Multi-track Mixing",
            "Music Mixing",
            "Voice Over Mixing",
            "Podcast Mixing",
            "Commercial Mixing",
            "Film Audio",
            "Live Recording",
            "Surround Sound",
          ],
        },
        {
          category: "Dubbing",
          services: [
            "Film Dubbing",
            "Documentary Dubbing",
            "Commercial Dubbing",
            "Animation Dubbing",
            "Series Dubbing",
            "Educational Content",
            "Corporate Videos",
            "Multilingual Dubbing",
          ],
        },
      ],
    },
    {
      label: "Post Production",
      dropdown: [
        {
          category: "Video Editing",
          services: [
            "Film Editing",
            "Commercial Editing",
            "Documentary Editing",
            "Wedding Videos",
            "Corporate Videos",
            "Music Videos",
            "Social Media",
            "YouTube Content",
          ],
        },
        {
          category: "Color Grading",
          services: [
            "Cinematic Grading",
            "Color Correction",
            "Film Grading",
            "Documentary Color",
            "Music Video Grading",
            "Corporate Grading",
            "Wedding Grading",
            "Digital Intermediate",
          ],
        },
        {
          category: "VFX",
          services: [
            "Visual Effects",
            "Motion Graphics",
            "CGI Animation",
            "Special Effects",
            "3D Animation",
            "Character Animation",
            "Compositing",
            "Title Design",
          ],
        },
        {
          category: "Sound Design",
          services: [
            "Film Sound Design",
            "Commercial Audio",
            "Documentary Sound",
            "Podcast Audio",
            "Music Production",
            "Foley Recording",
            "Audio Post",
            "Surround Mixing",
          ],
        },
      ],
    },
    {
      label: "Filmmaking",
      dropdown: [
        {
          category: "Feature Film",
          services: [
            "Screenplay Development",
            "Pre-Production",
            "Principal Photography",
            "Post-Production",
            "Distribution",
            "Film Festivals",
            "Marketing",
            "International Sales",
          ],
        },
        {
          category: "Short Film",
          services: [
            "Concept Development",
            "Script Writing",
            "Production Planning",
            "Filming",
            "Post-Production",
            "Festival Strategy",
            "Online Distribution",
            "Portfolio Development",
          ],
        },
        {
          category: "Documentary",
          services: [
            "Research & Development",
            "Story Treatment",
            "Interview Production",
            "B-Roll Filming",
            "Archival Research",
            "Post-Production",
            "Distribution",
            "Educational Licensing",
          ],
        },
        {
          category: "Wedding Films",
          services: [
            "Pre-Wedding Consultation",
            "Ceremony Coverage",
            "Reception Filming",
            "Highlight Reels",
            "Feature Films",
            "Drone Coverage",
            "Multi-Camera",
            "Same Day Editing",
          ],
        },
      ],
    },
    {
      label: "Camping",
      dropdown: [
        {
          category: "Political Campaign",
          services: [
            "Election Campaigns",
            "Door-to-Door",
            "Rally Organization",
            "Voter Awareness",
            "Candidate Promotion",
            "Political Messaging",
            "Community Outreach",
            "Grassroots Mobilization",
          ],
        },
        {
          category: "Social Campaign",
          services: [
            "Health Awareness",
            "Education Campaigns",
            "Environmental Initiatives",
            "Women Empowerment",
            "Child Safety",
            "Digital Literacy",
            "Cleanliness Drives",
            "Social Justice",
          ],
        },
        {
          category: "Surveys",
          services: [
            "Market Research",
            "Political Surveys",
            "Social Research",
            "Customer Feedback",
            "Opinion Polls",
            "Academic Research",
            "Government Surveys",
            "Community Assessment",
          ],
        },
        {
          category: "Religious Campaign",
          services: [
            "Festival Celebrations",
            "Religious Awareness",
            "Spiritual Programs",
            "Community Events",
            "Pilgrimage Organization",
            "Religious Education",
            "Cultural Preservation",
            "Interfaith Harmony",
          ],
        },
      ],
    },
    {
      label: "Government Tander",
      dropdown: [
        {
          category: "IT & Software Development Tenders",
          services: [
            "Website Development & Maintainance",
            "E-Governance Solutions",
            "Cyber Security & Data Protection",
            "Mobile App Development",
            "Cloud Computing & Data Center Management",
          ],
        },
        {
          category: "Electrical & Power Supply Tenders",
          services: [
            "Solar Power Projects",
            "Electricity Transmission & Distribution",
            "Smart Meter Installation",
            "EV Charging Station Setup",
          ],
        },
        {
          category: "Defense & Security Tenders",
          services: [
            "Defense Equipment Supply",
            "CCTV & Survelliance System",
            "Security Guard Services",
            "Border & Costal Security Projects",
          ],
        },
        {
          category: "Transport & Logistics Tenders",
          services: [
            "Public Transport Services",
            "Railway Cargo & Freight Services",
            "Government Vehicle Supply",
          ],
        },
        {
          category: "Education & Training Tenders",
          services: [
            "School & College Construction",
            "Smart Classroom Setup",
            "Teacher Training & Skill Development",
          ],
        },
        {
          category: "Printing & Stationary Tenders",
          services: [
            "Books & Study Material Printing",
            "Office Stationary Supply",
            "Election & Campaign Material Printing",
            
          ],
        },
        
        {
          category: "Advertising & Media Tenders",
          services: [
            "Digital Marketing & Social Media Promotion",
            "Radio & TV Adevertisments",
            "Hoardings & Outdoor Adevertisments",
          ],
        },
      ],
    },
    { label: "Contact", link: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div className="relative group" key={idx}>
                <a
                  href="#"
                  className="relative text-white py-1 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.label}
                </a>

                {/* Main dropdown with animation */}
                <div className="absolute top-full left-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0 z-50">
                  <div className="p-4">
                    {item.dropdown.map((category, subIdx) => (
                      <div
                        key={subIdx}
                        className={`mb-4 last:mb-0 ${
                          "services" in category ? "relative group/sub" : ""
                        }`}
                      >
                        {"services" in category ? (
                          // Render with sub-dropdown if services exist
                          <>
                            <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors duration-200">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover/sub:text-orange-400">
                                {category.category}
                              </h4>
                              <svg
                                className="w-2.5 h-2.5 text-gray-500 group-hover/sub:text-orange-400 transition-colors"
                                viewBox="0 0 10 10"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <polygon points="0,0 10,5 0,10" />
                              </svg>
                            </div>

                            {/* Sub-dropdown with left-to-right animation */}
                            <div className="absolute left-full top-0 ml-2 w-80 bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-300 transform translate-x-[-10px] group-hover/sub:translate-x-0 z-60">
                              <div className="p-4">
                                <h5 className="text-sm font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                                  {category.category} Services
                                </h5>
                                <div className="grid grid-cols-1 gap-1">
                                  {category.services.map(
                                    (service, serviceIdx) => {
                                      let link = "#";

                                      if (item.label === "Live Streaming") {
                                        link = "/livestream";
                                      } else if (item.label === "Camping") {
                                        link = "/campaign";
                                      } else if (
                                        item.label === "Government Tander"
                                      ) {
                                        link = "/government";
                                      }

                                      return (
                                        <a
                                          key={serviceIdx}
                                          href={link}
                                          className="px-3 py-2 text-xs text-gray-900 hover:bg-gray-800 hover:text-white rounded transition-all duration-200 block"
                                        >
                                          {service}
                                        </a>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          // Render as simple link if no services
                          <a
                            href={category.link || "#"}
                            className="block p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors duration-200"
                          >
                            <h4 className="text-sm font-semibold text-gray-900 hover:text-orange-400">
                              {category.category}
                            </h4>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={item.link || "#"}
                className="relative text-white py-1 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center">
          <button
            className="text-white p-2 hover:text-orange-400 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white ml-2 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 py-4 z-40 max-h-96 overflow-y-auto">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.link || "#"}
                  className="text-gray-900 hover:text-orange-400 transition-colors py-2 block font-medium"
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.slice(0, 3).map((category, subIdx) => (
                      <div key={subIdx} className="text-gray-700 text-sm">
                        <div className="font-medium py-1 text-orange-400">
                          {category.category}
                        </div>
                        {"services" in category && category.services && (
                          <div className="ml-4 space-y-1">
                            {category.services
                              .slice(0, 2)
                              .map((service, serviceIdx) => (
                                <div
                                  key={serviceIdx}
                                  className="text-xs text-gray-600 hover:text-gray-900 py-1"
                                >
                                  {service}
                                </div>
                              ))}
                            <div className="text-xs text-orange-300">
                              +{category.services.length - 2} more services...
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    {item.dropdown.length > 3 && (
                      <div className="text-xs text-orange-400 font-medium">
                        +{item.dropdown.length - 3} more categories...
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
