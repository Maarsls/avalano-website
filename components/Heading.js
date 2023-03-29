import React from "react";

function Heading({ title, subtitle, dark }) {
  return (
    <div className="max-w-xl mx-auto mb-2">
      <div className="text-center ">
        <div className="relative flex flex-col items-center">
          <p
            className={`text-6xl font-bold leading-tight  ${
              dark ? "text-gray-200" : "dark:text-gray-700"
            }`}
          >
            {title}
          </p>

          <div className="flex w-32 mt-5 mb-4 overflow-hidden rounded">
            <div className="flex-1 h-2 bg-blue-600"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-200"></div>
          </div>
        </div>

        {subtitle && (
          <p className="mb-16 text-base text-center text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default Heading;
