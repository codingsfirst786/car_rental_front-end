import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import logo from "../../assets/footerContent/Frame.png";

function BlogLabel() {
  const categories = [
    "All Categories",
    "Tech",
    "Bio",
    "New",
    "Science",
    "Health",
    "Travel",
    "Education",
    "Business",
    "Sports",
    "Finance",
    "AI",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sticky top-0 left-5 z-50 md:hidden bg-[#00667C] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#004D5A]"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Overlay for mobile view when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-72 p-5 shadow-lg md:rounded-xl bg-white transform transition-transform duration-300 ease-in-out z-50 md:sticky md:top-0 md:left-5 md:w-full md:translate-x-0 ${
          isOpen ? "translate-x-0 w-full" : "translate-x-full"
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-5 right-5 text-gray-600 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center mb-5">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(31%) sepia(89%) saturate(714%) hue-rotate(194deg) brightness(96%) contrast(97%)",
            }}
          />
        </div>

        {/* Search Input */}
        <label
          htmlFor="search"
          className="block text-gray-700 font-medium mb-2"
        >
          🔍 Search Articles
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search articles..."
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00667C] transition"
        />

        {/* Filter Section */}
        <div className="mb-5">
          <label
            htmlFor="filter"
            className="block text-gray-700 font-medium mb-1"
          >
            📌 Filter
          </label>
          <select
            id="filter"
            className="w-full p-2 border rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Browse by Categories */}
        <h2 className="text-xl font-semibold mb-4 text-[#00667C]">
          📂 Categories
        </h2>
        <div className="h-[40vh] overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#00667C] text-white font-semibold shadow-md"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogLabel;
