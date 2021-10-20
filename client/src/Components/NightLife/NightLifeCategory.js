import React from "react";
import { AiFillStar } from "react-icons/ai";

const MobileView = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow">
                <div className="w-40 h-40">
                    <img src="https://b.zmtcdn.com/data/pictures/7/18818847/04178f22eab3e1654d9b7d37ef15d00b_featured_v2.jpg" alt="Burger" className="w-full h-full"/>
                </div>
                <div>
                    <h3 className="my-2 pb-2 text-base font-medium font-light mx-4">La Cabana</h3>
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
                    <img src="https://b.zmtcdn.com/data/pictures/7/18818847/04178f22eab3e1654d9b7d37ef15d00b_featured_v2.jpg" alt="Burger" className="w-full h-full rounded-md"/>
                </div>
                <div className="pb-2">
                    <div className="flex justify-between">
                        <h3 className="text-base font-medium font-light mx-4 text-lg">La Cabana</h3>
                        <div className="mx-2 px-2 flex items-center gap-1 bg-green-500 rounded text-white">
                            <h3>4.0</h3>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="flex justify-between font-light text-md">
                        <h3 className="mx-4">Itallian, North Ind...</h3>
                        <div className="mx-2 px-2">
                            <p>1500 for two</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const NightLifeCategory = () => {
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

export default NightLifeCategory;