import React, { useState } from "react";
import "../assets/scss/Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import metamask from "../assets/images/metamask.png";
import Identicon from "./Identicon";
import { Button, Badge, Card, Modal } from "antd";
import { CopyOutlined, FolderViewOutlined } from "@ant-design/icons";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const Header = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers();
    const etherBalance = useEtherBalance(account);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function handleConnectWallet() {
        activateBrowserWallet();
    }

    function handleDeactivateAccount() {
        deactivate();
        setIsModalVisible(false);
    }

    return (
        <div className="header-container">
            <Link to="/">
                <div className="header-left">
                    <img src={logo} className="logo" alt="logo"></img>
                    <div className="brainshield">Brainshield</div>
                </div>
            </Link>
            <div className="header-right">
                <Modal
                    title="Tài khoản"
                    width={350}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    className="modal-container"
                >
                    <div className="modal-top">
                        <div>Đã kết nối với MetaMask</div>
                        <Button
                            className="button"
                            onClick={handleDeactivateAccount}
                        >
                            Thay đổi
                        </Button>
                    </div>
                    <div className="modal-content">
                        <Identicon />
                        <div className="account">
                            {account &&
                                `${account.slice(0, 20)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                        </div>
                    </div>
                    <div className="modal-button">
                        <Button icon={<CopyOutlined />} className="button">
                            Sao chép địa chỉ
                        </Button>
                        <a href={`https://ropsten.etherscan.io/address/${account}`} target="_blank" rel="noreferrer">
                            <Button
                                icon={<FolderViewOutlined />}
                                className="button"
                            >
                                Xem trên Etherscan
                            </Button>
                        </a>
                    </div>
                    <div className="modal-bottom">
                        <div>Giao dịch của bạn sẽ hiển thị ở đây!</div>
                    </div>
                </Modal>
                <Link to="/explore">
                    <Button className="button">Khám phá</Button>
                </Link>
                {
                    account ? (
                        <Link to="/mine">
                            <Button className="button">Sản phẩm của tôi</Button>
                        </Link>
                    ) : null
                }
                <Link to="/new">
                    <Button className="button">Tạo sản phẩm mới</Button>
                </Link>
                {
                    account ? (
                        <div onClick={showModal} className="account-button">
                            <Badge.Ribbon
                                text={
                                    etherBalance &&
                                    parseFloat(formatEther(etherBalance)).toFixed(
                                        3
                                    ) + "ETH"
                                }
                                color="#395266"
                            >
                                <Card size="small" className="account-container">
                                    <Identicon />
                                    <div className="account">
                                        {account &&
                                            `${account.slice(
                                                0,
                                                6
                                            )}...${account.slice(
                                                account.length - 4,
                                                account.length
                                            )}`}
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </div>
                    ) : (
                        <Button
                            className="button metamask"
                            onClick={handleConnectWallet}
                        >
                            <img src={metamask} alt="metamask" />
                        </Button>
                    )
                }
            </div >
        </div >
    );
};

export default Header;