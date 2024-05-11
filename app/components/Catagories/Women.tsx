"use client";
import React from "react";
import MainNav from "../Navbar/MainNav";
import useSWR from "swr";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Spinner } from "@nextui-org/react";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Womens = () => {
  // =================Get data==============================
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products/category/women's%20clothing",
    fetcher
  );
  console.log("data________________", data);

  // ==================Turnicat title name================================
  function truncateTitle(title: any, maxLength = 20) {
    return title.length > maxLength
      ? title.substring(0, maxLength - 3) + "..."
      : title;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <MainNav />
      <div className=" ">
        <div className="flex flex-wrap gap-4 p-5 items-center justify-center lg:justify-start">
          {data?.map((item: any, index: any) => (
            <div className="flex flex-col border gap-20 items-center p-2 w-[15rem] sm:w-[20rem]">
              <div className="flex flex-col items-center gap-5">
                <div className="h-48 w-48  relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold">
                    {truncateTitle(item.title)}
                  </p>
                  <p>{item.price}$</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-black text-white hover:scale-110 transition-all px-3 rounded-l flex items-center gap-2">
                  <MdOutlineShoppingCart />
                  <p>Add to cart</p>
                </button>

                <button className="border border-black border-1 px-2 rounded-l hover:scale-110 transition-all">
                  <CiHeart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womens;
