import React from "react";
import "../assets/scss/Home.scss";
import { Avatar, Tooltip } from "antd";
import minhduc from "../assets/images/minhduc.jpg";
import khanhlinh from "../assets/images/khanhlinh.jpg";
import minhdung from "../assets/images/minhdung.jpg";
import namphuong from "../assets/images/namphuong.jpg";

const Home = () => {
    return (
        <div className="home-container">
            <p className="home-title">
                <span>B</span>
                <span>R</span>
                <span>A</span>
                <span>I</span>
                <span>N</span>
                <span>S</span>
                <span>H</span>
                <span>I</span>
                <span>E</span>
                <span>L</span>
                <span>D</span>
            </p>
            <div className="home-content">
                <div className="home-content-left">
                    Ứng dụng bảo vệ quyền sở hữu tác giả dành cho trẻ em
                </div>
                <div className="home-content-right">
                    <Tooltip title="Lead" placement="top">
                        <Avatar size="large" src={namphuong} />
                    </Tooltip>
                    <Tooltip title="Backend" placement="top">
                        <Avatar size="large" src={minhduc} />
                    </Tooltip>
                    <Tooltip title="Frontend" placement="top">
                        <Avatar size="large" src={khanhlinh} />
                    </Tooltip>
                    <Tooltip title="Mobile" placement="top">
                        <Avatar size="large" src={minhdung} />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Home;
