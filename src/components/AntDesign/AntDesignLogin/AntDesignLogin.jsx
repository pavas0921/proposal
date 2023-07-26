import { Button, Image, Input } from "antd";
import React from "react";
import Logo from "../../../assets/login.png";
import "./styles.css";

const AntDesignLogin = () => {
  return (
    <div className="main_div">
      <div className="div_form">
        <div className="div_img">
          <Image width={200} src={Logo} />
        </div>
        <div className="div_input">
          <Input type="email" placeholder="Nombre de usuario" />
        </div>
        <div className="div_input">
          <Input type="password" placeholder="Constraseña" />
        </div>
        <div className="div_button">
          <Button type="primary">Ingresar</Button>
        </div>
      </div>
    </div>
  );
};

export default AntDesignLogin;
