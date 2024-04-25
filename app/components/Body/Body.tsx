import React from "react";
import Carousal from "./Carousal";
import ProductGrid from "./ProductGrid";
import TopCatagories from "../TopCatagories/TopCatagories";

const Body = () => {
  return (
    <div>
      <Carousal />
      <ProductGrid />
      <TopCatagories />
    </div>
  );
};

export default Body;
