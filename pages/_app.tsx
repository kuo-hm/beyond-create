import type { AppProps } from "next/app";
import "../assets/css/globals.css";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
