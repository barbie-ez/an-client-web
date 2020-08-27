import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./index.scss";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import Link from "react-router-dom/Link";
import auth from "../../helper/auth";
import { connect } from "react-redux";
import { signOut } from "../../requests/userRequest";

const Header = (props) => {
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [registerModalShow, setRegisterModalShow] = React.useState(false);

  useEffect(() => {
    if (loginModalShow) {
      Object.entries(props.user).length
        ? setLoginModalShow(false)
        : setLoginModalShow(true);
    }
  }, [props.user]);

  const user = auth.fetchUserDetails().firstName;

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
              {auth.isloggedIn() || Object.entries(props.user).length ? (
                <>
                  <Link to="/">Anime</Link>
                  <Link to="/">Studio</Link>
                  <Link to="/">Forum</Link>
                  <DropdownButton
                    key="Secondary"
                    id="dropdown-basic-button"
                    title="WELCOME"
                  >
                    <Dropdown.ItemText>
                      HI {user.toUpperCase()}
                    </Dropdown.ItemText>
                    <Dropdown.Item href="#" onClick={() => props.signOut()}>
                      Log Out
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* <Link to="#" onClick={() => props.signOut()}>
                    Log Out
                  </Link> */}
                </>
              ) : (
                <>
                  <DropdownButton
                    key="Secondary"
                    id="dropdown-basic-button"
                    title="NEW HERE ?"
                  >
                    <Dropdown.Item
                      href="#"
                      onClick={() => setLoginModalShow(true)}
                    >
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={() => setRegisterModalShow(true)}
                    >
                      Signup
                    </Dropdown.Item>
                  </DropdownButton>
                </>
              )}
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

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(mapStateToProps, { signOut })(Header);
