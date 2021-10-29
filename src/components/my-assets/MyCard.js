import React, { useState } from "react";
import "../../assets/scss/MyCard.scss";
import { useEthers } from "@usedapp/core";

import { useAssetsCall } from "../../hooks/index";
import { Card, Modal, Tooltip } from "antd";
import DetailProduct from "../explorer/DetailProduct";

const MyCard = (props) => {
    const { Meta } = Card;
    const { account } = useEthers();
    const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);

    const [id, accountAddress, ipfsHash, name, description, vote] =
        useAssetsCall(props.id);

    if (accountAddress !== account) {
        return null;
    }

    const showDetailHandler = () => {
        setIsModalDetailVisible(true);
    };

    const handleDetailCancel = () => {
        setIsModalDetailVisible(false);
    };

    return (
        <React.Fragment>
            {/* Modal for detail */}
            <Modal
                title="Chi tiết sản phẩm"
                visible={isModalDetailVisible}
                width="60%"
                button="false"
                onCancel={handleDetailCancel}
            >
                <DetailProduct
                    key={id}
                    ipfsHash={ipfsHash}
                    name={name}
                    description={description}
                />
            </Modal>
            <Card
                key={props.id}
                cover={
                    <Tooltip placement="top" title={"Nhấn vào để xem chi tiết"} arrowPointAtCenter>
                        <img
                            alt="sample asset"
                            src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
							style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
								cursor: "pointer"
                            }}
                            onClick={showDetailHandler}
                        />
                    </Tooltip>
                }
            >
                <Meta title={name} description={description} />
            </Card>
        </React.Fragment>
    );
};

export default MyCard;
