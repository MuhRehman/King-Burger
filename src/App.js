import React from "react";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App App-header">
      <div className="">
        <div className="container">
          <div className="login-content">
            <div className="login-logo pt-5">
              <h4 className="text-center" style={{ color: "#ffffff" }}>
                King Burger <font style={{ color: "#bfbfbf" }}>Admin</font>
              </h4>
            </div>

            <div className="login-form">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ color: "#bfbfbf" }}>
                    EMAIL ADDRESS
                  </Form.Label>
                  <Form.Control placeholder=" Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ color: "#bfbfbf" }}>PASSWORD</Form.Label>
                  <Form.Control placeholder="Password" />
                </Form.Group>
                <Button
                  name="login"
                  type="submit"
                  block
                  className="btn btn-success btn-flat m-b-30 m-t-30"
                >
                  SIGN IN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
