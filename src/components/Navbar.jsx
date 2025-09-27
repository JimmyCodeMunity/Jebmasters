import React, { useState, useEffect } from "react";
import { navbarlinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ bgtransparent }) => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // To track sticky state
  const handleMenu = () => {
    setOpen(!open);
  };

  const pathname = useLocation().pathname;
  const scrollHeight = document.documentElement.scrollHeight;
  

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Apply sticky class when scrolling past top
      } else {
        setIsSticky(false); // Remove sticky class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener on unmount
    };
  }, []);

  return (
    <div
    className={`w-full sm:py-8 py-6 sm:px-16 px-6 ${
      isSticky || !bgtransparent ? "bg-black animate-fade-in duration-500" : "bg-transparent"
    } ${isSticky ? "sticky top-0 z-50 shadow-lg" : ""}`}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          {/* logo here */}
          <Link to="/">
            <h1 className="text-orange-500 text-2xl font-semibold">
              Jebmasters Ltd
            </h1>
          </Link>
        </div>

        <div className="md:block hidden">
          <ul className="flex flex-row items-center space-x-3">
            {navbarlinks?.map((nav) => {
              const active = pathname == nav?.path;
              return (
                <li
                  className={`text-white hover:text-orange-500 ${
                    pathname == nav?.path || pathname.includes(nav?.path)
                      ? "text-orange-500"
                      : ""
                  }`}
                >
                  <Link to={nav?.path}>{nav?.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:hidden block">
          <button>
            <Menu onClick={handleMenu} color="white" size={26} />
          </button>
        </div>
        {open && (
          <div className="bg-black z-50 absolute top-16 right-5 min-h-32 py-2 w-40 rounded-md">
            <ul className="flex flex-col items-center space-y-3">
              {navbarlinks?.map((nav) => {
                const active = pathname === nav?.path;
                return (
                  <li
                    className={`text-white hover:text-orange-500 ${
                      active ? "text-orange-500" : ""
                    }`}
                    onClick={() => handleMenu()}
                  >
                    <Link to={nav?.path}>{nav?.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
