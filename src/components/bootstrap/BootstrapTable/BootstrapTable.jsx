import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { BootstrapNavbar } from "../BootstrapNavbar";
import "./styles.css";

const BootstrapTable = () => {
  return (
    <div className="div-table-main">
      <div className="div-navbar">
        <BootstrapNavbar />
      </div>
      <div className="div-title">
        <h1>Table</h1>
      </div>

      <div className="div-table">
        <Table striped>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div></div>
                <button className="button-table">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <div></div>
                <button className="button-table">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <div></div>
                <button className="button-table">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="button-table">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="div-buttons">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="div-buttons">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  );
};

export default BootstrapTable;
