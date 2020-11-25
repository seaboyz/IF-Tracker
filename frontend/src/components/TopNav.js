import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Button } from "react-bootstrap";

function TopNav() {
  return (
    <div class="fluid-container fixed-top ">
      <Navbar className="" bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="text-light ml-5">
          IF Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button
            type="submit"
            href="/login"
            variant="outline-success"
            className="text-light mr-5 ml-auto"
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;
