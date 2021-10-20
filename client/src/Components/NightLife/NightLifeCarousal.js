import React from "react";

import NightLifeCategory from "./NightLifeCategory";

const NightLifeCarousal = () => {
    return (
        <>
            <h1 className="text-xl sm:text-4xl font-semibold my-3">Nightlife Restaurants at Chennai</h1>
            <div className="flex flex-wrap justify-between sm:justify-start gap-3 sm:gap-12">
                <NightLifeCategory />
                <NightLifeCategory />
                <NightLifeCategory />
            </div>
        </>
    );
};

export default NightLifeCarousal;