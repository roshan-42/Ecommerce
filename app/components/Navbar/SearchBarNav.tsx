import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TERipple } from "tw-elements-react";
import { FaSearch } from "react-icons/fa";

const SearchBarNav = () => {
  return (
    <div className="border flex justify-between h-20 items-center px-10">
      <div>
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-orange-400 rlex gap-5" variant="bordered">
              <GiHamburgerMenu />
              All Catagories
              <MdOutlineArrowDropDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className="bg-gray-200 ml-7 rounded-md w-[20rem]   "
            aria-label="Static Actions"
          >
            <DropdownItem className="p-2">Electronics Devices</DropdownItem>
            <DropdownItem className="p-2">Men's Fashion</DropdownItem>
            <DropdownItem className="p-2">Women's Fashion</DropdownItem>
            <DropdownItem className="p-2">Watches & Accessories</DropdownItem>
            <DropdownItem className="p-2">TV & Home Appliances</DropdownItem>
            <DropdownItem className="p-2">Sports & Outdoor </DropdownItem>
            <DropdownItem className="p-2">Babies & Toys</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/* //Searchbar   */}

      <div className=" sm:w-[30%]  lg:w-96">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          {/* <!--Search button--> */}
          <TERipple color="light">
            <button
              className="relative flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </TERipple>
        </div>
      </div>

      {/* ================Last button====================== */}
      <button className="border-black border transition-all ease-in-out hover:bg-black hover:text-white  flex flex-col items-center justify-center px-12 h-12">
        <p className="text-sm">Black Friday</p>
        <p className="text-xs">Get 45% Off!</p>
      </button>
    </div>
  );
};

export default SearchBarNav;
