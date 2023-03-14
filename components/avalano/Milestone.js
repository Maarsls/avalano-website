import React, { useState, useEffect, useRef } from "react";

// function useOnScreen(ref, rootMargin = "0px") {
//   // State and setter for storing whether element is visible
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Update our state when observer cal lback fires
//         setIntersecting(entry.isIntersecting);
//       },
//       {
//         rootMargin,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => {
//       observer.unobserve(ref.current);
//     };
//   }, []); // Empty array ensures that effect is only run on mount and unmount

//   return isIntersecting;
// }

export default function Milestone({ milestone, description, when, isActive }) {
  // // Ref for the element that we want to detect whether on screen
  // const ref = useRef();
  // // Call the hook passing in ref and root margin
  // // In this case it would only be considered onScreen if more ...
  // // ... than 300px of element is visible.
  // const onScreen = useOnScreen(ref, "-420px");
  return (
    <div className="relative flex justify-between" >
      {/* dot */}
      <div className="flex flex-col items-center w-10 mr-4 md:w-24">
        <div>
          {isActive ? (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-card-color">
              <div className="w-4 h-4 rounded-full bg-slate-200"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-card-color">
              <div className="w-4 h-4 rounded-full bg-primary-card-color"></div>
            </div>
          )}
        </div>

        <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
      </div>

      <div>
        <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium bg-secondary-background-color rounded-3xl">
          {when}
        </h2>

        <div className="relative flex-1 mb-10 border-b-4 shadow bg-secondary-background-color border-primary-background-color-dark rounded-3xl">
          <div className="relative z-20 p-6">
            <p className="mb-2 text-xl font-bold text-gray-600">{milestone}</p>

            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
