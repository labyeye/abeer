import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  FiHome,
  FiImage,
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
        { name: "BabyshowerBanner", path: "cinematography/babyshower-banner" },
        {
          name: "BabyshowerGallery",
          path: "cinematography/babyshower-gallery",
        },
        { name: "BabyshootGallery", path: "cinematography/babyshoot-gallery" },
        { name: "BirthdayGallery", path: "cinematography/birthday-gallery" },
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
        { name: "BabyshowerBanner", path: "photography/babyshower-banner" },
        {
          name: "BabyshowerGallery",
          path: "photography/babyshower-gallery",
        },
        { name: "BabyshootGallery", path: "photography/babyshoot-gallery" },
        { name: "BirthdayGallery", path: "photography/birthday-gallery" },
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
      name: "Government Tandor",
      icon: <FiShield className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Government Tandor Banner", path: "/dashboard/government-banner" },
        { name: "Government Tandor Gallery", path: "/dashboard/government-gallery" },
      ],
    },
    {
      name: "Campaigning",
      icon: <FiShield className="w-5 h-5" />,
      path: null,
      children: [
        { name: "Campaigning Banner", path: "/dashboard/campaigning-banner" },
        { name: "Campaigning Gallery", path: "/dashboard/campaigning-gallery" },
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
