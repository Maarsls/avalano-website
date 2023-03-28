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
      <CustomHead
        title="Avalano"
        description={
          "Der Avalano Lawinensonde ist ein hochwertiges Werkzeug, das entwickelt wurde, um Ihnen im ungesicherten Gelände Sicherheit zu bieten. Mit seiner robusten Konstruktion und seinem benutzerfreundlichen Design ist dieser Probe perfekt für alle geeignet, die gerne abseits der Piste Ski oder Snowboard fahren. Kontaktieren Sie uns noch heute, um mehr zu erfahren! Die Gründer von Avalano sind Marcel Maffey und Patrick Jenewein."
        }
      >
        <meta
          property="og:title"
          content="Avalano-Lawinensonde zur Schneedeckenanalyse"
        />
        <meta
          property="og:description"
          content="Der Avalano Lawinensonde ist ein hochwertiges Werkzeug, das entwickelt wurde, um Ihnen im ungesicherten Gelände Sicherheit zu bieten. Mit seiner robusten Konstruktion und seinem benutzerfreundlichen Design ist dieser Probe perfekt für alle geeignet, die gerne abseits der Piste Ski oder Snowboard fahren. Kontaktieren Sie uns noch heute, um mehr zu erfahren! Die Gründer von Avalano sind Marcel Maffey und Patrick Jenewein."
        />
        <meta
          property="og:image"
          content="https://www.avalano.at/assets/hero2.jpeg"
        />
      </CustomHead>

      <HeroSection />

      <div className="">
        <QuotesSection />
        <MediaSection />
        <TeamSection />
        <FAQSection />
      </div>
    </>
  );
}
