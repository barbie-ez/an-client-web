import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { loginUser } from "../../requests/userRequest";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import auth from "../../helper/auth";
function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  function handleUserChange(e) {
    const form = e.currentTarget;

    form.checkValidity();
    setEmail(e.target.value);
    setValidate(true);
  }
  function handlePasswordChange(e) {
    const form = e.currentTarget;

    form.checkValidity();
    setPassword(e.target.value);
    setValidate(true);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: email,
      password,
    };
    await props.loginUser(user);
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.errorMessage && (
          <Alert variant="danger">{props.errorMessage}</Alert>
        )}
        <Form noValidate validated={validate}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleUserChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>
          <button className="primary-button" onClick={onSubmit}>
            Submit
          </button>
          {props.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <span></span>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
//const mapStateToProps = ({ user, loading }) => ({ ...user, loading });
const mapStateToProps = (state) => {
  return {
    user: { ...state.user.user },
    loading: state.user.loading,
    errorMessage: state.user.errorMessage,
  };
};
export default connect(mapStateToProps, { loginUser })(LoginModal);
