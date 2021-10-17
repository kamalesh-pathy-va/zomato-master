import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const MobileNav = () => {
    return (
        <>
            <div className="items-center justify-between flex w-full md:hidden">
                <div className="w-28">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className="w-full h-full"/>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                        <FaPizzaSlice />
                    </span>
                </div>
            </div>
        </>
    );
};

const DesktopNav = () => {
    return (
        <>
            <div className="hidden lg:flex items-center">
            <div className="flex gap-4">
                <div className="w-32 py-3">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className="w-full h-full"/>
                </div>
                <div className="border flex px-2 py-3 rounded-lg shadow-md gap-2">
                    <div className="flex items-center w-1/3">
                        <div className="text-zomato-400 text-2xl">
                            <ImLocation />
                        </div>
                        <input type="search" placeholder="Chennai" className="px-2 w-full outline-none"></input>
                        <div className=" text-xl px-2">
                            <AiFillCaretDown />
                        </div>
                    </div>
                    <div className="flex border-l-2 border-gray-300 w-96 items-center px-3">
                        <div className="text-gray-500 px-2 text-lg">
                            <BsSearch />
                        </div>
                        <input type="search" placeholder="Search for restaurant, cuisine or a dish" className="w-full px-2 outline-none"></input>
                    </div>
                </div>
            </div>
            <div className="flex text-gray-500 text-lg ml-16">
                <button className="mx-4 w-24 p-3">Log In</button>
                <button className="mx-4 w-24 p-3">Sign Up</button>
            </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="p-4 lg:py-3 lg:px-1 flex bg-white md:shadow-none shadow-md items-center">
                <MobileNav />
                <DesktopNav />
            </nav>
        </>
    );
};

export default Navbar;