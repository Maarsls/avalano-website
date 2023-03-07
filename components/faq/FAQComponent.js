import React from "react";

export default function FAQComponent({ question, answer }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow  bg-secondary-background-color rounded-box mb-2"
    >
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
