import React from "react";
import { BootstrapNavbar } from "../bootstrap/BootstrapNavbar";
import { BootstrapForm } from "../bootstrap/BootstrapForm";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="navbar-div">
        <BootstrapNavbar />
      </div>

      <div className="form-div">
        <BootstrapForm />
      </div>
    </div>
  );
};

export default Dashboard;
