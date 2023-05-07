import React, { useEffect, useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Forgotpassword() {
  let { id, token } = useParams();
  let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  let validUser = async () => {
    let res = await axios.get(`${url}/users/forgotpassword/${id}/${token}`);
    console.log(res)
    if (res.status === 201) {
      toast.success("validUser");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    validUser();
  }, []);

  let handleClick = async (e) => {
    e.preventDefault();
    console.log("res");
    let res = await axios.post(`${url}/users/${id}/${token}`, { password });
    if (res.status === 201) {
      setPassword("");
      setMessage(true);
    } else {
      toast.error("Token Expired generate new Token ");
    }
  };
  return (
    <>
      <div>
        <Card className="shadow col-lg-6 mx-auto mt-5">
          <div className="text-center mt-5">
            <h2>Enter Your New Password</h2>
          </div>
          {message ? (
            <p
              style={{ color: "green", textAlign: "center", fontWeight: "bold" }}
            >
              Password updated Successfully
            </p>
          ) : (
            " "
          )}
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              className="col-lg-12"
              variant="primary"
              onClick={(e) => handleClick(e)}
            >
              Send
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Forgotpassword;