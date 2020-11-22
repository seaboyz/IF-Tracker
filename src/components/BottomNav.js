import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Breadcrumb } from "react-bootstrap";
import "../BottomNav.css";

function BottomNav() {
  return (
    <div>
      <Breadcrumb className="fluid-container fixed-bottom bg-none bottomNav">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BottomNav;
