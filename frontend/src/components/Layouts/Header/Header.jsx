import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Searchbar from "./Searchbar";
import logo from "../../../assets/images/logo3.png";
import PrimaryDropDownMenu from "./PrimaryDropDownMenu";
import SecondaryDropDownMenu from "./SecondaryDropDownMenu";
// import CategoryDropDownMenu from "./CategoryDropDownMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  // const [toggleCategoryDropDown, setToggleCategoryDropDown] = useState(false);

  // Function to handle mouse leave from dropdown container
  const handleMouseLeave = () => {
    setTogglePrimaryDropDown(false);
    setToggleSecondaryDropDown(false);
    // setToggleCategoryDropDown(false);
  };

  return (
    <header className="bg-green-400 fixed top-0 py-2.5 w-full z-10">
      <div className="w-full h-10 sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="flex items-center h-20 flex-1">
          <Link
            className="h-full  w-10% mr-2 sm:mr-4 custom-link-margin"
            to="/"
          >
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={logo}
              alt="bharatbazzar Logo"
            />
          </Link>
          <Searchbar />
        </div>

        <div
          className="dropdown-container"
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
        >
          <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
            {isAuthenticated === false ? (
              <Link
                to="/login"
                className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer"
                onMouseEnter={() => setTogglePrimaryDropDown(false)} // Close primary dropdown on mouse enter
              >
                Login
              </Link>
            ) : (
              <div
                className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer"
                onMouseEnter={() => setTogglePrimaryDropDown(true)} // Open primary dropdown on mouse enter
              >
                {user.name && user.name.split(" ", 1)}
                <span>
                  {togglePrimaryDropDown ? (
                    <ExpandLessIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                  )}
                </span>
              </div>
            )}

            {togglePrimaryDropDown && (
              <PrimaryDropDownMenu
                setTogglePrimaryDropDown={setTogglePrimaryDropDown}
                user={user}
                handleMouseLeave={handleMouseLeave} // Pass the mouse leave handler
              />
            )}

            <span
              className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer"
              onMouseEnter={() => setToggleSecondaryDropDown(true)} // Open secondary dropdown on mouse enter
            >
              More
              <span>
                {toggleSecondaryDropDown ? (
                  <ExpandLessIcon sx={{ fontSize: "16px" }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                )}
              </span>
            </span>

            {toggleSecondaryDropDown && (
              <SecondaryDropDownMenu
                handleMouseLeave={handleMouseLeave} // Pass the mouse leave handler
              />
            )}

            <Link
              to="/cart"
              className="flex items-center text-white font-medium gap-2 relative"
            >
              <span>
                <ShoppingCartIcon />
              </span>
              {cartItems.length > 0 && (
                <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                  {cartItems.length}
                </div>
              )}
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
