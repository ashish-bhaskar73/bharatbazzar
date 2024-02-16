import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryDropDownMenu = () => {
  const [isHovered, setIsHovered] = useState(true);

  // Define your categories here
  const categories = [
    { name: "Slipper", link: "/category/slipper" },
    { name: "Sports", link: "/category/sports" },
    { name: "Women", link: "/category/women" },
    { name: "Formals", link: "/category/formals" },
    // Add more categories as needed
  ];

  return (
    <div
      className="absolute w-60 -right-2 top-9 bg-white shadow-2xl rounded flex-col text-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered &&
        categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50"
          >
            {/* <span className="text-primary-blue">
              <img src={category.icon} alt={category.name} />
            </span> */}
            {category.name}
          </Link>
        ))}

      <div className="absolute right-1/2 -top-2.5">
        <div className="arrow_down"></div>
      </div>
    </div>
  );
};

export default CategoryDropDownMenu;
