import React from "react";

export default function OnePrice({ name, fee, description }) {
  return (
    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
      <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-primary-card-color">
        <div className="space-y-2">
          <h4 className="text-2xl font-bold">{name}</h4>
          {isNaN(fee) ? (
            <span className="text-6xl font-bold">{fee}</span>
          ) : (
            <span className="text-6xl font-bold">
              € {fee}
              <span className="text-sm tracking-wide">/monat</span>
            </span>
          )}
        </div>
        <p className="mt-3 leading-relaxed">{description}</p>
        <ul className="flex-1 mb-6 ">
          <li className="flex mb-2 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Aenean quis</span>
          </li>
          <li className="flex mb-2 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Morbi semper</span>
          </li>
          <li className="flex mb-2 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Tristique enim nec</span>
          </li>
        </ul>
        <button
          type="button"
          className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-primary-background-color"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
