import React from "react";
import { useParams } from "react-router";

import Delivery from "./Delivery/index";

const Master = () => {
    const { type } = useParams();
    return (
        <>
            <div className="m-4 mb-24">
                {type === "delivery" && <Delivery />}
            </div>
        </>
    );
};

export default Master;