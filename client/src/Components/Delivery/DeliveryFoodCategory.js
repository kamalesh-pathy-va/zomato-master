import React from "react";
import { AiFillStar } from "react-icons/ai";

const MobileView = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow">
                <div className="w-40 h-40">
                    <img src="https://b.zmtcdn.com/data/dish_photos/df5/6138eb83f95c8c44d8965c29dea66df5.jpg" alt="Burger" className="w-full h-full"/>
                </div>
                <div>
                    <h3 className="my-2 pb-2 text-base font-medium font-light mx-4">Burger</h3>
                </div>
            </div>
        </>
    );
};

const DesktopView = () => {
    return (
        <>
            <div className="bg-white rounded-md hover:shadow-lg">
                <div className="w-80 h-80 p-3">
                    <img src="https://b.zmtcdn.com/data/dish_photos/df5/6138eb83f95c8c44d8965c29dea66df5.jpg" alt="Burger" className="w-full h-full rounded-md"/>
                </div>
                <div className="pb-2">
                    <div className="flex justify-between">
                        <h3 className="text-base font-medium font-light mx-4 text-lg">Burger</h3>
                        <div className="mx-2 px-2 flex items-center gap-1 bg-green-700 rounded text-white">
                            <h3>4.3</h3>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="flex justify-between font-light text-md">
                        <h3 className="mx-4">Burger</h3>
                        <div className="mx-2 px-2">
                            <p>150 for one</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const DeliveryFoodCategory = () => {
    return (
        <>
            <div className="block sm:hidden">
                <MobileView />
            </div>
            <div className="hidden lg:block">
                <DesktopView />
            </div>
        </>
    );
};

export default DeliveryFoodCategory;