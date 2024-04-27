"use client";
import React, { useEffect, useState } from "react";
import SearchBarNav from "../Navbar/SearchBarNav";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartItems(parsedItems);
    }
  }, []);
  const countItemOccurrences = (items: any, itemName: any) => {
    return items.filter((item: any) => item.name === itemName).length;
  };
  const removeItem = (itemName: any) => {
    const updatedItems = cartItems.filter(
      (item: any) => item.name !== itemName
    );
    setCartItems(updatedItems);
    typeof window !== "undefined" &&
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const getUniqueItems = (items: any) => {
    const uniqueItems: any = [];
    items.forEach((item: any) => {
      const existingItem = uniqueItems.find(
        (uItem: any) => uItem.name === item.name
      );
      if (!existingItem) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl">
        <div>Your Cart Items</div>
        <div className="bg-gray-400 w-[40%] h-[1px]" />
        <div>
          {getUniqueItems(cartItems).map((item: any, index: any) => (
            <div
              className="flex-col sm:flex sm:flex-row gap-5 p-4 justify-between"
              key={index}
            >
              <p>Item Name: {item.name}</p>
              <p>
                {countItemOccurrences(cartItems, item.name) > 1 && (
                  <span>({countItemOccurrences(cartItems, item.name)})</span>
                )}
              </p>
              <p>Item Price: ${item.price}</p>
              <button
                className="bg-red-500 text-white px-4 rounded-md"
                onClick={() => removeItem(item.name)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button className="bg-orange-400 px-4 rounded-md">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
