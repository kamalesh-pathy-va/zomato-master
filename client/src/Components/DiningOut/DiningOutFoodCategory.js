import React from "react";
import { AiFillStar } from "react-icons/ai";

const MobileView = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow">
                <div className="w-40 h-40">
                    <img src="https://b.zmtcdn.com/data/pictures/6/19558656/2dd35b2bc361405e674ec5797a43e723_featured_v2.jpg" alt="Burger" className="w-full h-full"/>
                </div>
                <div>
                    <h3 className="my-2 pb-2 text-base font-medium font-light mx-4">Level Up</h3>
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
                    <img src="https://b.zmtcdn.com/data/pictures/6/19558656/2dd35b2bc361405e674ec5797a43e723_featured_v2.jpg" alt="Burger" className="w-full h-full rounded-md"/>
                </div>
                <div className="pb-2">
                    <div className="flex justify-between">
                        <h3 className="text-base font-medium font-light mx-4 text-lg">Level Up</h3>
                        <div className="mx-2 px-2 flex items-center gap-1 bg-green-500 rounded text-white">
                            <h3>3.9</h3>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="flex justify-between font-light text-md">
                        <h3 className="mx-4">Fast food, Chinese,...</h3>
                        <div className="mx-2 px-2">
                            <p>1400 for two</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const DiningOutCategory = () => {
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

export default DiningOutCategory;