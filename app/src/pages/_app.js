import "@/styles/globals.css";
import "../styles/custom.scss";
import { Poppins } from "next/font/google";
import Layout from "@/components/Layout";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
