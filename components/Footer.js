import React, { useState } from "react";
import Image from "next/image";

import Logo from "../public/logo.png";

import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { addOrUpdateMailingList } from "../utils/strapiAPI";

function Footer() {
  // State to store the email input value
  const [email, setEmail] = useState("");

  // State to store the status of the subscription
  const [status, setStatus] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the email input
    if (!email || !email.includes("@")) {
      setStatus("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    // Send the email to a fake API endpoint
    addOrUpdateMailingList(email)
      .then((data) => {
        // Update the status based on the response
        if (data.data === "Email already exists") {
          setStatus("Diese E-Mail-Adresse ist bereits registriert.");
        } else if (data.data) {
          setStatus("Vielen Dank für Ihre Anmeldung!");
          setEmail("");
        } else {
          setStatus(
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          );
        }
      })
      .catch((err) => {
        // Handle any network errors
        console.error(err);
        setStatus(
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
        );
      });
  };

  return (
    <footer className="p-10 footer bg-neutral text-neutral-content">
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
          </a>
        </div>
      </div>

      <div className="">
        <span className="footer-title">Newsletter</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center space-x-4"
        >
          <label htmlFor="email" className="text-gray-700 sr-only">
            E-Mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Anmelden
          </button>
        </form>
        {status && (
          <p
            className={`text-sm ${
              status.startsWith("Vielen Dank")
                ? "text-green-500"
                : "text-red-500"
            } mt-2 text-center`}
          >
            {status}
          </p>
        )}
      </div>
    </footer>
  );
}

export default Footer;
