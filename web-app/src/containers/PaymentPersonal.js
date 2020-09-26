import React, { useState, useEffect } from "react";
import Mydb from "../mydb.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPaymentList } from "../actions/shopActions";
import {
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Navbar,
  Nav,
  ListGroup,
  Form
} from "react-bootstrap";
import Avatar from "../components/Avatar";

function PaymentPersonal(props) {
  const { loginuser, users, setPaymentList } = props;
  const [paymentState, setPaymentState] = useState("none");
  const [payList, setPayList] = useState([]);

  useEffect(() => {
    let newPayList = [...payList];
    for (let i = 0; i < users.length; i++) {
      newPayList.push(false);
    }
    setPayList(newPayList);
  }, [users]);

  const handleCheck = (checked, idx) => {
    let updatePayList = [...payList];
    updatePayList[idx] = checked;
    setPayList(updatePayList);
  };

  const handleNext = () => {
    let payUserList = [];
    if (paymentState === "other") {
      payList.forEach((ele, idx) => {
        if (ele) {
          payUserList.push(users[idx].id);
        }
      });
    } else {
      payUserList.push(loginuser.id);
    }
    setPaymentList(paymentState, payUserList);
  };

  const usersPayment = users.map((ele, idx) => {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={3}>
            <Avatar width={25} src={ele.profile}></Avatar>
          </Col>
          <Col>
            {ele.name} ${ele.person_price}
          </Col>
          <Col xs={2}>
            <Form.Check
              checked={payList[idx]}
              onChange={e => handleCheck(e.target.checked, idx)}
            />
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });

  return (
    <div style={{ marginBottom: "50px" }}>
      <Container style={{ marginBottom: "80px" }} className="container-home">
        <Row className="mb-3">
          <Avatar src={loginuser.profile} style={{ width: "30vw" }} />
        </Row>
        <h5>選擇要結帳的對象</h5>
        <Accordion>
          <Row>
            <Col xs={6}>
              <Button
                variant={
                  paymentState == "myself" ? "secondary" : "outline-secondary"
                }
                onClick={() => setPaymentState("myself")}
              >
                自己結帳
              </Button>
            </Col>
            <Col xs={6}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                variant={
                  paymentState == "other" ? "primary" : "outline-primary"
                }
                onClick={() => setPaymentState("other")}
              >
                幫其他人
              </Accordion.Toggle>
            </Col>
          </Row>
          <Accordion.Collapse eventKey="0">
            {paymentState === "other" ? (
              <ListGroup className="mt-3">{usersPayment}</ListGroup>
            ) : (
              <></>
            )}
          </Accordion.Collapse>
        </Accordion>
        <Navbar
          variant="dark"
          bg="secondary"
          fixed="bottom"
          style={{ width: "100%" }}
        >
          <Nav
            className="justify-content-center text-center"
            style={{ width: "100%" }}
          >
            <Nav.Link
              style={{ width: "100%" }}
              href="#payment/final"
              onClick={handleNext}
              disabled={paymentState === "none"}
            >
              <h5 className="text-white" style={{ margin: "unset" }}>
                進入結帳
              </h5>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  loginuser: state.shop.loginuser,
  users: state.shop.users
});

export default connect(
  mapStateToProps,
  { setPaymentList }
)(PaymentPersonal);
