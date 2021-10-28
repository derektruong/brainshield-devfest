import React from "react";
import { useCount } from "../../hooks/index";
import MyCard from "./MyCard";
import "../../assets/scss/ExploreProducts.scss";

const ExploreProducts = () => {
	const count = useCount();

	let pictureAsset = [];
    if (count) {
        for (let i = 1; i <= count.toNumber(); i++) {
			const card = <MyCard key={i} id={i}/>;
			if(card !== null) {
				pictureAsset.push(card);
			}
        }
    }

    return (
        <div className="card-list">
            {pictureAsset}
        </div>
    );
};

export default ExploreProducts;
