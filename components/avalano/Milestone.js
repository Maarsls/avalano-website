import React from "react";

export default function Milestone({ milestone, description, when }) {
  return (
    <div className="relative flex justify-between">
      {/* dot */}
      <div className="flex flex-col items-center w-10 mr-4 md:w-24">
        <div>
          <div className="flex items-center justify-center w-8 h-8 bg-primary-card-color rounded-full">
            <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
          </div>
        </div>

        <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
      </div>

      <div>
        <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium  bg-secondary-background-color rounded-3xl">
          {when}
        </h2>

        <div className="relative flex-1 mb-10 bg-secondary-background-color border-b-4 border-primary-background-color-dark shadow rounded-3xl">
          <div className="relative z-20 p-6">
            <p className="mb-2 text-xl font-bold text-gray-600">{milestone}</p>

            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
