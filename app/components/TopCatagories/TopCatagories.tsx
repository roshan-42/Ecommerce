"use client";
import React, { useEffect, useState } from "react";

import img1 from "@/public/assets/projector.jpg";
import img2 from "@/public/assets/microphone.png";
import img3 from "@/public/assets/phone1.png";
import img4 from "@/public/assets/projector.png";
import img5 from "@/public/assets/StereoHeadset.jpg";
import img6 from "@/public/assets/camera-drone-1.png";
import img7 from "@/public/assets/laptop.png";
import img8 from "@/public/assets/cc.png";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/Store/Slices/CounterSlice";

import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const TopCatagories = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const storedItems = localStorage.getItem("items");
  //     if (storedItems) {
  //       try {
  //         const parsedItems = JSON.parse(storedItems);

  //         dispatch(incrementByAmount(parsedItems)); // Assuming incrementByAmount is defined in your Redux slice
  //         console.log("_____________", parsedItems);
  //       } catch (error) {
  //         console.error("Error parsing stored items:", error);
  //       }
  //     }
  //   }, []);

  //   function add_items_inlocal() {
  //     localStorage.setItem("items", Number(count));
  //   }

  const count = useSelector((state: any) => state.counter.value);

  const products = [
    {
      img: img1,
      name: "Led Projector",
      rate: "250$",
    },
    {
      img: img2,
      name: "Microphone",
      rate: "20$",
    },
    {
      img: img3,
      name: "iPhone",
      rate: "1100$",
    },
    {
      img: img4,
      name: "Xpeed Projector",
      rate: "55$",
    },
    {
      img: img5,
      name: "Stereo Headset",
      rate: "500$",
    },
    {
      img: img6,
      name: "Drone",
      rate: "850$",
    },
    {
      img: img7,
      name: "Laptop",
      rate: "950$",
    },
    {
      img: img8,
      name: "CC Camera",
      rate: "65$",
    },
  ];
  let ls: Record<string, any>;
  //   console.log("++++++++++++++++++", localStorage);
  if (typeof window !== "undefined") {
    ls = localStorage;
  }
  useEffect(() => {
    ls.setItem("items", count);
  }, [count]);
  return (
    <div className="p-5">
      <h2 className="font-bold text-sm sm:text-xl px-10">
        Top Catagories This Week
      </h2>
      <div className="flex flex-wrap  justify-center gap-10 p-5 border  border-1">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col   border gap-20  items-center p-2 w-[15rem] sm:w-[20rem]"
            >
              <div className="flex items-center gap-5">
                <div className="h-32 w-32">
                  <Image src={item.img} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold p-1 text-sm sm:text-md">
                    {item.name}
                  </p>
                  <p>{item.rate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    dispatch(increment());

                    // add_items_inlocal();
                  }}
                  className="bg-black text-white hover:scale-110   transition-all px-3 rounded-l flex items-center gap-2"
                >
                  <MdOutlineShoppingCart />
                  <p>Add to cart</p>
                  {/* <p>{count}</p> */}
                </button>
                <button className="border border-black border-1 px-2 rounded-l hover:scale-110   transition-all">
                  <CiHeart size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCatagories;
