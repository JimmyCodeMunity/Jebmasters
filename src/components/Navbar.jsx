import React, { useState } from "react";
import { navbarlinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ bgtransparent }) => {
  console.log(bgtransparent);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  // et pathname
  const pathname = useLocation().pathname;
  console.log(pathname);
  // set active

  return (
    <div
      className={`w-full sm:py-8 py-6 sm:px-16 px-6 ${
        bgtransparent ? "bg-transparent" : "bg-black"
      }`}
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
          <ul className="flex flex row items-center space-x-3">
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
          <div className="bg-black absolute top-16 right-5 min-h-32 py-2 w-40 rounded-md">
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
