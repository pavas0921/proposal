import { Button, Space, Spin } from "antd";
import React from "react";
import "./styles.css";

const ButtonAntDesign = () => {
  return (
    <div className="div_button_ppal">
      <div className="div_buttons">
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button disabled block>
          disabled
        </Button>
        <Button type="text" block>
          text
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </div>
      <div className="div_loader">
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
      </div>
    </div>
  );
};

export default ButtonAntDesign;
