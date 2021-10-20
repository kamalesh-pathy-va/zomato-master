import React from "react";

import DiningOutCategory from "./DiningOutFoodCategory";

const DiningOutCarousal = () => {
    return (
        <>
            <h1 className="text-xl sm:text-4xl font-semibold my-3">Dine-Out Restaurants at Chennai</h1>
            <div className="flex flex-wrap justify-between sm:justify-start gap-3 sm:gap-12">
                <DiningOutCategory />
                <DiningOutCategory />
                <DiningOutCategory />
            </div>
        </>
    );
};

export default DiningOutCarousal;