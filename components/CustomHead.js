import React from "react";
import Head from "next/head";

function CustomHead({ children, title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <link rel="canonical" href="https://avalano.at" />

      <link rel="icon" href="/favicon.ico" />

      {children}
    </Head>
  );
}

export default CustomHead;
