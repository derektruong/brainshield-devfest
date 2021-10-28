import React from "react";
import CardProduct from "./CardProduct";
import { useCount } from "../../hooks/index";

const ExploreProducts = () => {
    const count = useCount();

	let pictureAsset = [];
    if (count) {
        for (let i = 1; i <= count.toNumber(); i++) {
            pictureAsset.push(<CardProduct key={i} id={i}/>)
        }
    }

    // console.log(asset);

    return <div className="card-list">{pictureAsset}</div>;

};

export default ExploreProducts;
