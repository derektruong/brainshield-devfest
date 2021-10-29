import React, {useState} from "react";
import "../../assets/scss/MyCard.scss"
import { useEthers } from "@usedapp/core";

import { useAssetsCall } from "../../hooks/index";
import { Card, Image, Modal, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
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
                <Image
                    alt="sample asset"
                    src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
                />
            }
			actions={[
                    <span onClick={showDetailHandler}>
                        <Tooltip placement="topLeft" title={"Xem chi tiết"}>
                            <EyeOutlined key="eye" />
                        </Tooltip>
                    </span>,
                ]}
        >
            <Meta title={name} description={description} />
        </Card></React.Fragment>
        
    );
};

export default MyCard;
