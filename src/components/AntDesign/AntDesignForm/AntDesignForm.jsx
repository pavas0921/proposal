import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import React from "react";
import "./styles.css";

const { Search } = Input;
const { TextArea } = Input;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
  },
];

const AntDesignForm = () => {
  return (
    <div className="div_form_main">
      <div className="div_antd_form">
        <Space direction="vertical" size="middle">
          <Space.Compact>
            <Input
              placeholder="input search text"
              sx={{ border: "2px solid" }}
            />
          </Space.Compact>
          <Space.Compact>
            <Input
              style={{
                width: "20%",
              }}
              placeholder="input search text"
            />
            <Input
              style={{
                width: "80%",
              }}
              placeholder="input search text"
            />
          </Space.Compact>
          <Space.Compact>
            <Search
              addonBefore="https://"
              placeholder="input search text"
              allowClear
            />
          </Space.Compact>
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input placeholder="input search text" />
            <Button type="primary">Submit</Button>
          </Space.Compact>
          <Space.Compact>
            <Select defaultValue="Zhejiang" options={options} />
            <Input placeholder="input search text" />
          </Space.Compact>
          <Space.Compact size="large">
            <Input addonBefore={<SearchOutlined />} placeholder="large size" />
            <Input placeholder="another input" />
          </Space.Compact>
          <>
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </>
        </Space>
      </div>
    </div>
  );
};

export default AntDesignForm;
