import React, { useState } from "react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { useAssetsCall, useContractMethod } from "../../hooks/index";
import "../../assets/scss/ExploreProducts.scss";
import { Card, Avatar, Modal, Form, Input, Tooltip, Image } from "antd";
import { HeartTwoTone, CoffeeOutlined, EyeOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import DetailProduct from "./DetailProduct";

const CartProduct = (props) => {
    const { Meta } = Card;
    const { account } = useEthers();
    const [isModalDonateVisible, setIsModalDonateVisible] = useState(false);
    const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
    const [donateAmountState, setdonateAmountState] = useState("");

    const [id, accountAddress, ipfsHash, name, description, vote] =
        useAssetsCall(props.id);

    const { state: votePictureState, send: votePicture } =
        useContractMethod("votePicture");

    const clickVoteHandler = () => {
        if (accountAddress.toLowerCase() === account.toLowerCase()) {
            return;
        }
        votePicture(props.id);
    };

    const { sendTransaction, state } = useSendTransaction({
        transactionName: "Send Ethereum",
    });
    const clickDonateHandler = () => {
        if (accountAddress.toLowerCase() === account.toLowerCase()) {
            return;
        }
        setIsModalDonateVisible(true);
    };

    const handleDonateOk = () => {
        try {
            setIsModalDonateVisible(false);
            if (typeof +donateAmountState === "number") {
                sendTransaction({
                    to: accountAddress,
                    value: utils.parseEther(donateAmountState),
                });
            }
        } catch (error) {
            alert("Cần nhập đúng giá trị số giao dịch!");
        }
    };

    const handleDonateCancel = () => {
        setIsModalDonateVisible(false);
    };

    const donateAmountChangedHandler = (event) => {
        setdonateAmountState(event.target.value);
    };

    const showDetailHandler = () => {
        setIsModalDetailVisible(true);
    };

    const handleDetailCancel = () => {
        setIsModalDetailVisible(false);
    };

    return (
        <React.Fragment>
            {/* Modal for donate */}
            <Modal
                title="Cảm ơn tấm lòng của bạn nha 💝"
                visible={isModalDonateVisible}
                onOk={handleDonateOk}
                onCancel={handleDonateCancel}
            >
                <Form.Item label="Nhập số ETH bạn muốn donate (ETH)" required>
                    <Input
                        onChange={donateAmountChangedHandler}
                        placeholder="0.000"
                    />
                </Form.Item>
            </Modal>

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
                key={id}
                style={{ width: 300, margin: "10px" }}
                cover={
                    <Image
                        alt="example"
                        src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                        }}
                    />
                }
                actions={[
                    <span onClick={clickVoteHandler}>
                        <Tooltip
                            placement="topLeft"
                            title={"Yêu thích sản phẩm này"}
                        >
                            <HeartTwoTone twoToneColor="#eb2f96" key="heart" />{" "}
                            <span>{vote ? vote.toNumber() : 0}</span>
                        </Tooltip>
                    </span>,
                    <span onClick={clickDonateHandler}>
                        <Tooltip
                            placement="topLeft"
                            title={"Donate cho sản phẩm này"}
                        >
                            <CoffeeOutlined key="coffee" />
                        </Tooltip>
                    </span>,
                    <span onClick={showDetailHandler}>
                        <Tooltip placement="topLeft" title={"Xem chi tiết"}>
                            <EyeOutlined key="eye" />
                        </Tooltip>
                    </span>,
                ]}
            >
                <Meta
                    avatar={
                        <Avatar
                            src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
                        />
                    }
                    title={name}
                    description={description}
                    // truncate 1 line
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "!important 70%",
                    }}
                />
            </Card>
        </React.Fragment>
    );
};

export default CartProduct;
