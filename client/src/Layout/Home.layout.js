import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

//redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getRestaurant()), []);

    return (<>
        <div className="container mx-auto xl:px-20">
            <Navbar />
            <FoodTab />
            {props.children}
            
        </div>
    </>);
};

export default HomeLayout;