import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Try from "./components/Navbar/Navigation";
import SearchBarNav from "./components/Navbar/SearchBarNav";
import MainNav from "./components/Navbar/MainNav";
import Carousal from "./components/Body/Carousal";
import Body from "./components/Body/Body";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainNav />
      <Body />
    </main>
  );
}
