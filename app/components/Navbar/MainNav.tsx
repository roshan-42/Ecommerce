"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBarNav from "./SearchBarNav";

const MainNav = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="">
      <Navbar />
      {/* =================Second======================= */}
      <div className="flex items-center justify-between px-10 relative border h-14">
        <Link href="/">
          <h1 className="xl sm:2xl md:text-3xl font-bold text-purple-600">
            E-Market
          </h1>
        </Link>
        <div className="hidden sm:flex">
          <Navigation />
        </div>
        <div className="flex gap-5">
          <div>
            <CiShoppingCart />
          </div>
          <div>
            <CiHeart />
          </div>
        </div>
        <button onClick={() => setShow(!show)} className=" sm:hidden">
          <GiHamburgerMenu />
        </button>
        <div
          className={`${
            show ? "opacity-0 translate-x-80" : "opacity-100 -translate-x-10"
          } sm:hidden bg-gray-200 absolute w-full top-10 p-5 transition-all duration-300 ease-in-out`}
        >
          <Navigation />
        </div>
      </div>
      <div className="hidden sm:block">
        <SearchBarNav />
      </div>
    </div>
  );
};

export default MainNav;
