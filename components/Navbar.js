import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../public/avalano-logo.png";

import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [user, loading] = useAuthState(auth);

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
      className={`navbar z-40 top-0 left-0 p-6  ${
        scrollTop > 10
          ? "bg-[#6096B4] transition-all delay-75 duration-1000 shadow-md"
          : null
      }`}
    >
      <div className="w-2/3 navbar-start lg:w-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            
          </ul>
        </div>
        <Link href={"/"}>
          <p>GLATZSERVER</p>
        </Link>
        {/* <a className="text-xl normal-case btn btn-ghost">daisyUI</a> */}
      </div>

      {/* displayed on large screens */}
      <div className="hidden mx-auto navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal lg:mx-auto">
          
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link href={"/dashboard"} className="btn">
            Dashboard
          </Link>
        ) : (
          <Link href={"/auth/login"} className="btn">
            Anmelden
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
