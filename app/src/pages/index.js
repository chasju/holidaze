import { Poppins } from "next/font/google";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import NavComponent from "@/components/nav/nav.jsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Home() {
  return (
    <div>
      <NavComponent />
    </div>
  );
}
