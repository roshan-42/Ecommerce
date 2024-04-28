"use client";
import React, { useEffect, useState } from "react";
import SearchBarNav from "../Navbar/SearchBarNav";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/Store/Slices/CounterSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<any>([]);
  const count = useSelector((state: any) => state.counter.value);
  useEffect(() => {
    // Retrieve cart items from local storage
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartItems(parsedItems);
    }
  }, []);
  const decrementFunction = (itemName: any) => {
    dispatch(decrement());
    const indexToRemove = cartItems.findIndex(
      (item: any) => item.name === itemName
    );

    if (indexToRemove !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(indexToRemove, 1);
      setCartItems(updatedItems);
      typeof window !== "undefined" &&
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
  };
  const incrementFunction = (item: any) => {
    dispatch(increment());
    const existingItemsJSON = localStorage.getItem("cartItems");
    let existingItems = existingItemsJSON ? JSON.parse(existingItemsJSON) : [];

    // Add the new item to the existing items array
    existingItems.push({ name: item.name, price: item.rate });

    // Save the updated items back to local storage
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    setCartItems([...cartItems, item]);
  };

  const countItemOccurrences = (items: any, itemName: any) => {
    return items.filter((item: any) => item.name === itemName).length;
  };
  const removeItem = (itemName: any) => {
    dispatch(decrement());
    const updatedItems = cartItems.filter(
      (item: any) => item.name !== itemName
    );
    setCartItems(updatedItems);
    typeof window !== "undefined" &&
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };
  let ls: Record<string, any>;
  //   console.log("++++++++++++++++++", localStorage);
  if (typeof window !== "undefined") {
    ls = localStorage;
  }
  useEffect(() => {
    ls.setItem("items", count);
  }, [count]);
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
                <div className="flex gap-5">
                  <button
                    onClick={() => incrementFunction(item)}
                    className="bg-black text-white px-2 rounded h-fit"
                  >
                    +
                  </button>
                  {countItemOccurrences(cartItems, item.name) > 0 && (
                    <span>
                      <p>Quantity:</p>
                      {countItemOccurrences(cartItems, item.name)}
                    </span>
                  )}
                  <button
                    onClick={() => decrementFunction(item.name)}
                    className="bg-black text-white px-2 rounded h-fit"
                  >
                    -
                  </button>
                </div>
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
