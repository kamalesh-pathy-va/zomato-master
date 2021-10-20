import React from "react";
import { useParams } from "react-router";

import Delivery from "./Delivery/index";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";

const Master = () => {
    const { type } = useParams();
    return (
        <>
            <div className="m-4 mb-24">
                {type === "delivery" && <Delivery />}
                {type === "night" && <NightLife />}
                {type === "dining" && <DiningOut />}
            </div>
        </>
    );
};

export default Master;