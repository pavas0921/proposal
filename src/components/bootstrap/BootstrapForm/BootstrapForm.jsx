import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./styles.css";

const BootstrapForm = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/table");
    e.preventDefault();
    console.log("hola");
  };
  return (
    <div className="div-form-main">
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel controlId="floatingInputGrid" label="Address 1">
            <Form.Control type="text" placeholder="Addres 1" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 radio">
          <Form.Check type="checkbox" label="Check button" />
          <Form.Check type="radio" label="Radio button" />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <div className="button">
          <Button variant="primary" type="submit">
            Go to Table
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BootstrapForm;
