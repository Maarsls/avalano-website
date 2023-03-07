import Head from "next/head";
import Image from "next/image";

import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";
import MediaSection from "@/components/MediaSection";
import QuotesSection from "@/components/QuotesSection";
import CustomHead from "@/components/CustomHead";
import FAQSection from "@/components/faq/FAQSection";

export default function Home() {
  return (
    <>
      <CustomHead title="Avalano" description={"Einfach baba"} />

      <HeroSection />

      <div className=" ">
        <QuotesSection />
        <MediaSection />
        <TeamSection />
        <FAQSection/>
      </div>
    </>
  );
}
