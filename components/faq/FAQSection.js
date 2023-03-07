import React from "react";
import FAQComponent from "./FAQComponent";
import Heading from "../Heading";

export default function FAQSection() {
  return (
    <div className="pb-20 p-5 pt-16 bg-primary-background-color">
      <Heading title="Häufig gestellte Fragen" />

      <div className="w-full lg:w-3/4 mx-auto rounded-xl overflow-hidden">
        <FAQComponent question={"Das ist die erste Frage"} answer={"Das ist die super Antwort"} />
        {/* create faq component with custom questions */}
        <FAQComponent question={"Das ist die zweite Frage"} answer={"Das ist die zweite suoer Antwort"} />
        <FAQComponent question={"Das ist die dritte Frage"} answer={"Das ist die dritte super Antwort"} />
      </div>
    </div>
  );
}
