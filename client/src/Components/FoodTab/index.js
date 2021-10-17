import React, { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline, IoFootstepsOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";

const MobileTab = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <BsHandbag />,
            name: "Delivery",
            isActive: false
        },
        {
            id: "night",
            icon: <IoBeerOutline />,
            name: "Night Life",
            isActive: false
        },
        {
            id: "dining",
            icon: <IoFootstepsOutline />,
            name: "Dining Out",
            isActive: false
        }
    ]);

    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden flex justify-between bg-white border shadow-inner p-3 fixed bottom-0 z-10 w-full">
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div className={type === items.id ? "flex flex-col relative items-center text-xl text-zomato-400" : "flex flex-col items-center text-xl"}>
                                <div className={ type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400" }/>
                                {items.icon}
                                <h5>{items.name}</h5>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTab />
            </div>
        </>
    );
};

export default FoodTab;