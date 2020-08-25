import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./index.scss";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";

export const Header = () => {
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [registerModalShow, setRegisterModalShow] = React.useState(false);
  return (
    <header>
      <Container fluid>
        <Row>
          <Col md={3} className="navbar-brand ">
            <nav>
              <h1>Anime Network</h1>
            </nav>
          </Col>
          <Col>
            <nav className="nav-right">
              <a href="#">Anime</a>
              <a href="#">Studio</a>
              <a href="#">Forum</a>
              <DropdownButton
                key="Secondary"
                id="dropdown-basic-button"
                title="NEW HERE ?"
              >
                <Dropdown.Item href="#" onClick={() => setLoginModalShow(true)}>
                  Login
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => setRegisterModalShow(true)}
                >
                  Signup
                </Dropdown.Item>
              </DropdownButton>
            </nav>
          </Col>
        </Row>
        <LoginModal
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
        />
        <RegisterModal
          show={registerModalShow}
          onHide={() => setRegisterModalShow(false)}
        />
      </Container>
    </header>
  );
};
