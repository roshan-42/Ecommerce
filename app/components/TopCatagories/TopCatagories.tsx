import React from "react";
import img1 from "@/public/assets/projector.jpg";
import img2 from "@/public/assets/microphone.png";
import img3 from "@/public/assets/phone1.png";
import img4 from "@/public/assets/projector.png";
import img5 from "@/public/assets/StereoHeadset.jpg";
import img6 from "@/public/assets/camera-drone-1.png";
import img7 from "@/public/assets/laptop.png";
import img8 from "@/public/assets/cc.png";

import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const TopCatagories = () => {
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
  return (
    <div className="p-5">
      <h2 className="font-bold text-sm sm:text-xl px-10">
        Top Catagories This Week
      </h2>
      <div className="flex flex-wrap  justify-center gap-10 p-5 border  border-1">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col   border gap-20  items-center p-2 w-[15rem] sm:w-[20rem]"
          >
            <div className="flex items-center gap-5">
              <div className="h-32 w-32">
                <Image src={item.img} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold p-1 text-sm sm:text-md">{item.name}</p>
                <p>{item.rate}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-black text-white px-3 rounded-l">
                Add to cart
              </button>
              <button className="border border-black border-1 px-2 rounded-l">
                <CiHeart size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCatagories;
