import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginUser } from "../actions/shopActions";
import { Button, Container, Row } from "react-bootstrap";
import Avatar from "../components/Avatar";

function Login(props) {
  const { user } = props;

  return (
    <Container className="container-home">
      <Row>
        <Avatar src={user.profile} width={130} height={130}/>
      </Row>
      <Row className="mt-2">
        <h4>{user.name}</h4>
      </Row>
      <Row>
        <Link to="/menu" className="text-white">
          <Button>開始點餐</Button>
        </Link>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
    user: state.shop.loginuser
});

export default connect(
  mapStateToProps,
  { setLoginUser }
)(Login);
