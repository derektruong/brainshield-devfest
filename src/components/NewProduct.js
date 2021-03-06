/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { useContractMethod } from "../hooks/index";
import "../assets/scss/NewProduct.scss";
import { Form, Input, Select, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

/* import the ipfs-http-client library */
import { create } from "ipfs-http-client";

/* Create an instance of the client */
const client = create("https://ipfs.infura.io:5001/api/v0");

const NewProduct = () => {
    const [form] = Form.useForm();
    const { account } = useEthers();

    const { Option } = Select;
    const [nameState, setNameState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");
    const [topicState, setTopicState] = useState("art");
    const [fileState, setFileState] = useState("");

    const normFile = (e) => {
        // console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "${label} is required!",
    };

    const onFinish = (values) => {
        let ipfsInfo = "";
        const IpfsFileHandler = async () => {
            try {
                const added = await client.add(fileState);
                ipfsInfo = added.path;
                createPictureHandler(account, ipfsInfo, nameState, descriptionState);
            } catch (error) {
                console.log("Error uploading file: ", error);
            }
        };
        IpfsFileHandler();
    };

    const onChangeName = (event) => {
        setNameState(event.target.value);
    };

    const onChangeDescription = (event) => {
        setDescriptionState(event.target.value);
    };

    const onChangeTopic = (value) => {
        setTopicState(value);
    };

    const uploadHandler = (file) => {
        setFileState(file);
        return false;
    };

    const { state: createPictureState, send: createPicture } =
        useContractMethod("createPicture");

    const createPictureHandler = (account, ipfsHash, name, description) => {
        createPicture(account, ipfsHash, name, description, 0);
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}
            className="new-product-container"
        >
            <Form.Item
                name="name"
                label="T??n s???n ph???m"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input
                    onChange={onChangeName}
                    placeholder="Nh???p t??n s???n ph???m c???a b???n..."
                />
            </Form.Item>
            <Form.Item
                name="description"
                label="M?? t??? s???n ph???m"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea
                    onChange={onChangeDescription}
                    placeholder="Nh???p m?? t??? s???n ph???m c???a b???n..."
                    required
                />
            </Form.Item>
            <Form.Item
                name="topic"
                label="Ch??? ?????"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select onChange={onChangeTopic}>
                    <Option value="art">Tranh v???</Option>
                    <Option value="music">??m nh???c</Option>
                    <Option value="photo">Nhi???p ???nh</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="File"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Upload.Dragger
                    name="dragger"
                    beforeUpload={uploadHandler}
                    accept=".png, .jpg, .jpeg"
                    multiple={false}
                    maxCount={1}
                    status="done"
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                        Click ho???c k??o file v??o ????y ????? t???i l??n
                    </p>
                    <p className="ant-upload-hint">
                        H??? tr??? cho t???i l??n m???t ho???c nhi???u file
                    </p>
                </Upload.Dragger>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    T???o
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NewProduct;
