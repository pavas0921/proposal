import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import "./style.css";
import Container from "react-bootstrap/Container";
import Login from "../../assets/login.png";

const Bootstrap = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="div-main-login">
      <Form className="form-component" onSubmit={handleClick}>
        <div className="div-form">
          <div className="div-image">
            <Image className="image" src={Login} rounded />
          </div>
          <Form.Group className="inputs-formGroup" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Nombre de Usuario"
            >
              <Form.Control
                className="inputs"
                type="email"
                placeholder="Nombre de Usuario"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Contraseña">
              <Form.Control
                className="inputs"
                type="password"
                placeholder="Contraseña"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="button-formGroup">
            <Button variant="primary" type="submit">
              INICIAR
            </Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default Bootstrap;
