"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiEarthAmerica } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Pages", path: "/your-path" },
    { title: "Blog", path: "/your-path" },

    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <nav className="hidden md:flex bg-gray-200 h-8 items-center w-[100%] px-10 justify-between">
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-3">
          <CiDeliveryTruck />
          <p className="text-sm">Free Delivery</p>
        </div>
        <div className="h-4 w-[1px] bg-gray-400 rounded-full " />

        <div className="flex items-center gap-3">
          <GiEarthAmerica />
          <p className="text-sm">Return Policy</p>
        </div>
        <div className="h-4 w-[1px] bg-gray-400 rounded-full " />

        <div className="flex items-center gap-3">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-2">
            <FaFacebook />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div>
        <p>Login</p>
      </div>
    </nav>
  );
}
