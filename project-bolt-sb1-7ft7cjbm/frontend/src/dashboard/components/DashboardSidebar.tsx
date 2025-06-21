import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  FiHome,
  FiSettings,
  FiVideo,
  FiUsers,
  FiBox,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiCamera,
  FiLink,
  FiShield,
  FiMusic,
  FiArchive,
  FiPackage,
} from "react-icons/fi";

export const DashboardSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    gallery: true,
    users: false,
    settings: false,
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiBox className="w-5 h-5" />,
      path: "/dashboard",
      children: null,
    },
    {
      name: "Home Page",
      icon: <FiHome className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Gallery", path: "/dashboard/gallery" },
        { name: "Hero Slider", path: "/dashboard/homeslides" },
        { name: "Category Showcase", path: "/dashboard/categories" },
      ],
    },
    {
      name: "Cinematography",
      icon: <FiVideo className="w-5 h-5" />,
      path: null,
      children: [
        { name: "WeddingBanner", path: "cinematography/wedding-banner" },
        { name: "WeddingGallery", path: "cinematography/wedding-gallery" },
        { name: "PreWeddingBanner", path: "cinematography/prewedding-banner" },
        {
          name: "PreWeddingGallery",
          path: "cinematography/prewedding-gallery",
        },
        { name: "Babyshower / Baby Shoot / Birthday Banner", path: "cinematography/babyshower-banner" },
        {
          name: "Babyshower / Baby Shoot / Birthday Gallery",
          path: "cinematography/babyshower-gallery",
        },
        { name: "EventBanner", path: "cinematography/event-banner" },
        { name: "EventGallery", path: "cinematography/event-gallery" },
        { name: "SportsBanner", path: "cinematography/sports-banner" },
        { name: "SportsGallery", path: "cinematography/sports-gallery" },
        { name: "AdvertisingBanner", path: "cinematography/ad-banner" },
        { name: "AdvertisingGallery", path: "cinematography/ad-gallery" },
        { name: "PoliticalBanner", path: "cinematography/political-banner" },
        { name: "PoliticalGallery", path: "cinematography/political-gallery" },
        { name: "FilmBanner", path: "cinematography/film-banner" },
        { name: "FilmGallery", path: "cinematography/film-gallery" },
      ],
    },
    {
      name: "PhotoGraphy",
      icon: <FiCamera className="w-5 h-5" />,
      path: null,
      children: [
        { name: "WeddingBanner", path: "photography/wedding-banner" },
        { name: "WeddingGallery", path: "photography/wedding-gallery" },
        { name: "PreWeddingBanner", path: "photography/prewedding-banner" },
        {
          name: "PreWeddingGallery",
          path: "photography/prewedding-gallery",
        },
        { name: "Babyshower / Baby Shoot / Birthday Banner", path: "photography/babyshower-banner" },
        {
          name: "Babyshower / Baby Shoot / Birthday Gallery",
          path: "photography/babyshower-gallery",
        },
        { name: "ModellingBanner", path: "photography/modelling-banner" },
        {
          name: "ModellingGallery",
          path: "photography/modelling-gallery",
        },
        { name: "ProductBanner", path: "photography/product-banner" },
        { name: "ProductGallery", path: "photography/product-gallery" },
        { name: "AerialBanner", path: "photography/aerial-banner" },
        { name: "AerialGallery", path: "photography/aerial-gallery" },
        { name: "EventBanner", path: "photography/event-banner" },
        { name: "EventGallery", path: "photography/event-gallery" },
        { name: "SportsBanner", path: "photography/sports-banner" },
        { name: "SportsGallery", path: "photography/sports-gallery" },
        { name: "PoliticalBanner", path: "photography/political-banner" },
        { name: "PoliticalGallery", path: "photography/political-gallery" },
        { name: "PhotoBookBanner", path: "photography/book-banner" },
        { name: "PhotoBookGallery", path: "photography/book-gallery" },
        { name: "PhotoStudioBanner", path: "photography/studio-banner" },
        { name: "PhotoStudioGallery", path: "photography/studio-gallery" },
      ],
    },

    {
      name: "Live Streaming",
      icon: <FiLink className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Live Stream Banner", path: "/dashboard/livestream-banner" },
        { name: "Live Stream Gallery", path: "/dashboard/livestream-gallery" },
      ],
    },
    {
      name: "Audio Studio",
      icon: <FiMusic className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Advertise Banner", path: "audio/audioadvertise-banner" },
        { name: "Advertise Gallery", path: "audio/audioadvertise-gallery" },
        { name: "Educational Banner", path: "audio/audioeducational-banner" },
        {
          name: "Educational Gallery",
          path: "audio/audioeducational-gallery",
        },
        { name: "Music Banner", path: "audio/audiomusic-banner" },
        {
          name: "Music Gallery",
          path: "audio/audiomusic-gallery",
        },
        {
          name: "Audio Production Banner",
          path: "audio/audioproduction-banner",
        },
        {
          name: "Audio Production Gallery",
          path: "audio/audioproduction-gallery",
        },
      ],
    },
    {
      name: "Cine Equipment",
      icon: <FiBox className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Cinema Camera Banner", path: "cine-equip/cine-camera-banner" },
        { name: "Cinema Camera Gallery", path: "cine-equip/arri-gallery" },
        { name: "Crain Banner", path: "cine-equip/crain-banner" },
        { name: "Crain Gallery", path: "cine-equip/crain-gallery" },
        { name: "Wallledp3 Banner", path: "cine-equip/wallledp3-banner" },
        { name: "Wallledp3 Gallery", path: "cine-equip/wallledp3-gallery" },
        { name: "Cinema Light Banner", path: "cine-equip/cinema-light-banner" },
        {
          name: "Cinema Light Gallery",
          path: "cine-equip/cinema-light-gallery",
        },
      ],
    },
    {
      name: "Government Tender",
      icon: <FiShield className="w-5 h-5" />,
      path: null,
      children: [
        {
          name: "Government Tender Banner",
          path: "/dashboard/government-banner",
        },
        {
          name: "Government Tender Gallery",
          path: "/dashboard/government-gallery",
        },
      ],
    },
    {
      name: "Campaigning",
      icon: <FiArchive className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Campaigning Banner", path: "/dashboard/campaigning-banner" },
        { name: "Campaigning Gallery", path: "/dashboard/campaigning-gallery" },
      ],
    },
    {
      name: "Image Selection",
      icon: <FiArchive className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Folder Manage", path: "/dashboard/folder" },
        { name: "Selection Viewer", path: "/dashboard/selection" },
      ],
    },
    {
      name: "Post Production",
      icon: <FiPackage className="w-5 h-5" />,
      path: null,
      children: [
        {
          name: "Record Banner",
          path: "/dashboard/post-production/record-banner",
        },
        {
          name: "Record Gallery",
          path: "/dashboard/post-production/record-gallery",
        },
        {
          name: "FCPX Banner",
          path: "/dashboard/post-production/fcpx-banner",
        },
        {
          name: "FCPX Gallery",
          path: "/dashboard/post-production/fcpx-gallery",
        },
        {
          name: "Color Grading Banner",
          path: "/dashboard/post-production/grading-banner",
        },
        {
          name: "Color Grading Gallery",
          path: "/dashboard/post-production/grading-gallery",
        },
        {
          name: "VFX Banner",
          path: "/dashboard/post-production/vfx-banner",
        },
        { name: "VFX Gallery", path: "/dashboard/post-production/vfx-gallery" },
      ],
    },

    {
      name: "Users",
      icon: <FiUsers className="w-5 h-5" />,
      path: null,
      children: [
        { name: "All Users", path: "/dashboard/users" },
        { name: "Add New", path: "/dashboard/users/new" },
        { name: "Roles", path: "/dashboard/users/roles" },
      ],
    },
    {
      name: "Settings",
      icon: <FiSettings className="w-5 h-5" />,
      path: "/dashboard/settings",
      children: null,
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-gray-100 flex flex-col h-screen fixed">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name.toLowerCase())}
                    className={`flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                      openMenus[item.name.toLowerCase()] ? "bg-gray-700" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {openMenus[item.name.toLowerCase()] ? (
                      <FiChevronDown className="w-4 h-4" />
                    ) : (
                      <FiChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {openMenus[item.name.toLowerCase()] && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            to={child.path}
                            className={`block p-2 rounded-lg hover:bg-gray-700 transition-colors ${
                              location.pathname === child.path
                                ? "bg-gray-700"
                                : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path!}
                  className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                    location.pathname === item.path ? "bg-gray-700" : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
