import { type AppType } from "next/dist/shared/lib/utils";

import { Oxanium } from "@next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-oxanium: ${oxanium.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
