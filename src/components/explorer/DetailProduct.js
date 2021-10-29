import React from "react";
import "../../assets/scss/DetailProduct.scss"
import { List, Avatar, Image } from 'antd';

const DetailProduct = (props) => {
    return (
        <List.Item
            key={props.key}
            extra={
                <Image
                    width={350}
                    alt="product"
                    src={`https://ipfs.infura.io/ipfs/${props.ipfsHash}`}
                />
            }
        >
            <List.Item.Meta
                avatar={<Avatar src={`https://ipfs.infura.io/ipfs/${props.ipfsHash}`} />}
                title={props.name}
                description={props.description}
            />
        </List.Item>
    );
};

export default DetailProduct;
