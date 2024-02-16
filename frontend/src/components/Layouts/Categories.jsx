import formal_shoes from "../../assets/images/Categories/formal_shoes.jpeg";
import sneaker from "../../assets/images/Categories/Sneaker.png";
import slipper from "../../assets/images/Categories/slipper.jpeg";
import flip_flop from "../../assets/images/Categories/flip_flop.png";
import sport from "../../assets/images/Categories/sport.jpeg";
import women from "../../assets/images/Categories/women.jpeg";

import { Link } from "react-router-dom";

const catNav = [
  {
    name: "Formal",
    icon: formal_shoes,
  },
  {
    name: "Sneakers",
    icon: sneaker,
  },
  {
    name: "Slipper",
    icon: slipper,
  },
  {
    name: "Flip Flop",
    icon: flip_flop,
  },
  {
    name: "Sport Shoes",
    icon: sport,
  },
  {
    name: "Women",
    icon: women,
  },
];

const Categories = () => {
  return (
    <section className="hidden sm:block bg-grey-200 mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
      <div className="flex items-center justify-between mt-4">
        {catNav.map((item, i) => (
          <Link
            to={`/products?category=${item.name}`}
            className="flex flex-col gap-1 items-center p-2 group"
            key={i}
          >
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
