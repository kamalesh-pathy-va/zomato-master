import React from "react";

import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
    return (
        <>
            <h1 className="text-xl sm:text-4xl font-semibold my-3">Eat what makes you happy</h1>
            <div className="flex flex-wrap justify-between sm:justify-start gap-3 sm:gap-12">
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
            </div>
        </>
    );
};

export default DeliveryCarousal;