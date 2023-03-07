import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../public/avalano-logo.png";

import Link from "next/link";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [myOpacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed z-40 top-0 left-0 p-6  ${
        scrollTop > 10
          ? "bg-[#6096B4] transition-all delay-75 duration-1000 shadow-md"
          : null
      }`}
    >
      <div className="navbar-start w-2/3 lg:w-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* burger menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href={"/avalano"}
                className="active:bg-secondary-background-color"
              >
                Das Produkt Avalano
              </Link>
            </li>
            <li>
              <Link
                href={"/map"}
                className="active:bg-secondary-background-color"
              >
                Die Anwender
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <Image src={logo} alt="Flowbite Logo" className="w-52 mr-3 h-auto" />
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>

      {/* displayed on large screens */}
      <div className="navbar-center hidden lg:flex  mx-auto">
        <ul className="menu menu-horizontal px-1 lg:mx-auto">
          <li className="text-slate-200 ">
            <Link
              href={"/avalano"}
              className="active:bg-secondary-background-color"
            >
              Das Produkt Avalano
            </Link>
          </li>
          <li className="text-slate-200">
            <Link
              href={"/map"}
              className="active:bg-secondary-background-color"
            >
              Anwender
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;
