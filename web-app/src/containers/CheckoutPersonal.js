import React, { Component } from "react";
import Mydb from "../mydb.js";
import {
  Button,
  Container,
  Row,
  Card,
  ListGroup,
  Col,
  Image,
  Navbar
} from "react-bootstrap";

const orders = Mydb.orders;
const products = Mydb.menu.products;
export default class CheckoutPersonal extends Component {
  state = { userOrderProduct: [], userOrderProductImg: [], totalPrice: 0 };
  componentDidMount() {
    this.handleCurrentUserOrder();
    this.handelFindProductImg();
  }

  handleCurrentUserOrder = () => {
    let { totalPrice, userOrderProduct } = this.state;
    orders.forEach(order => {
      userOrderProduct.push(
        ...Array.from(order.users, user => {
          if (user.includes("u01")) {
            const product_eachPrice = Math.ceil(
              order.product_price / user.length
            );
            totalPrice += product_eachPrice;
            return {
              product_price: order.product_price,
              product_name: order.product_name,
              product_eachPrice,
              shareUsers: user.length
            };
          }
        })
      );
    });
    this.setState({ userOrderProduct, totalPrice });
  };

  handelFindProductImg = () => {
    let { userOrderProduct, userOrderProductImg } = this.state;
    userOrderProduct = userOrderProduct.filter(
      product => product !== undefined
    );
    userOrderProductImg = Array.from(
      userOrderProduct,
      product =>
        products.find(_product => _product.name === product.product_name).image
    );
    this.setState({ userOrderProductImg, userOrderProduct });
  };

  render() {
    const { totalPrice, userOrderProduct, userOrderProductImg } = this.state;
    return (
      <Container style={{ margin: "0 0 80px 0", padding: "initial" }}>
        <Card style={{ border: "none" }}>
          <Navbar  bg="primary" sticky="top">
            <Card.Title className="navbar-checkout-personal">個人點餐確認</Card.Title>
          </Navbar>
          <ListGroup style={{ borderRadius: "unset" }}>
            {(userOrderProduct || []).map((product, idx) => (
              <ListGroup.Item
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)"
                }}
              >
                <Row>
                  <Col xs={2}>
                    <Image src={userOrderProductImg[idx]} width={50}></Image>
                  </Col>
                  <Col>
                    <h5 style={{ margin: "unset" }}>{product.product_name}</h5>
                    <div className="pt-1">
                      $ {product.product_price} / {product.shareUsers} = $
                      {product.product_eachPrice}
                    </div>
                  </Col>
                  <Col xs={3} className="d-flex align-items-center">
                    <h5>1 份</h5>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <Col
                style={{ width: "fit-content", float: "right" }}
                className="d-flex align-items-center"
              >
                <h5>總共: ${totalPrice}</h5>
              </Col>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={2}>
            <Button
              style={{ position: "fixed", bottom: "30px" }}
              variant="primary"
              onClick={() => window.history.back()}
            >
              返回
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              style={{ position: "fixed", bottom: "30px" }}
              variant="secondary"
              onClick={() => (window.location.href = "/")}
            >
              確認
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//     user: state.shop.user
// });

// export default connect(mapStateToProps, { setLoginUser })(CheckoutPersonal);
