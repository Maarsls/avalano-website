import React from "react";
import Image from "next/image";

import Logo from "../public/logo.png";

import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <Image src={Logo} width={50} height={50} />
        <p>
          Jenewein Maffey OG
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FiTwitter className="text-2xl" />
          </a>
          <a>
            <FaLinkedin className="text-2xl" />
            <FcLink className="text-2xl" />
          </a>
        </div>
      </div>

      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
