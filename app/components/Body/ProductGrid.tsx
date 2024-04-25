import React from "react";
import list1 from "@/public/assets/list1.jpg";
import list2 from "@/public/assets/list2.png";
import list3 from "@/public/assets/list-3.jpg";
import Image from "next/image";
import { Key } from "lucide-react";

const ProductGrid = () => {
  const images = [
    {
      img: list1,
    },
    {
      img: list2,
    },
    {
      img: list3,
    },
  ];
  return (
    <div className="flex-wrap flex gap-2 p-5">
      {images.map((item, index) => (
        <div key={index} className="h-auto w-auto">
          <Image src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
