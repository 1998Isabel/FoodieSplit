import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Row, Card, ListGroup, Col, Image, Navbar } from "react-bootstrap";
import Avatar from "../components/Avatar";

function PaymentFinal(props) {
  const { orders, products, users, payment } = props;
  const [usersOrder, setUsersOrder] = useState([]);

  useEffect(() => {
    handleUsersOrder();
  }, [payment]);

  const handleUsersOrder = () => {
    let tempOrders = payment.paylist.map((ele, idx) => {
      let tempOrderProduct = [];
      let tempTotal = 0;
      orders.forEach(order => {
        tempOrderProduct.push(
          ...Array.from(order.users, user => {
            if (user.includes(ele)) {
              const the_product = products.find(e => e.id === order.productid)
              let product_eachPrice = Math.ceil(
                the_product.price / user.length
              );
              tempTotal += product_eachPrice;
              return {
                product_price: the_product.price,
                product_name: the_product.name,
                product_eachPrice: product_eachPrice,
                shareUsers: user.length,
                product_image: the_product.image
              };
            }
          })
        );
      });
      tempOrderProduct = tempOrderProduct.filter(
        product => product !== undefined
      );
      return {
        order: tempOrderProduct,
        totalPrice: tempTotal
      };
    });
    setUsersOrder(tempOrders);
  };

  const orderLists = usersOrder.map((ele, idx) => {
    let the_user = users.find(u => u.id === payment.paylist[idx]);
    return (
      <div key={idx}>
        <Navbar variant="light" bg="light" sticky="top">
          <Card.Title className="navbar-checkout-all">
            <Avatar width={30} src={the_user.profile} />
            <span className="ml-2">{the_user.name}</span>
            <div style={{ position: "absolute", right: "8%" }}>
              個人金額：${ele.totalPrice}
            </div>
          </Card.Title>
        </Navbar>
        <ListGroup style={{ borderRadius: "unset" }}>
          {(ele.order || []).map((product, i) => (
            <ListGroup.Item
              // style={{
              //     backgroundColor: "rgba(0,0,0,0.05)"
              // }}
              key={`order${i}`}
            >
              <Row>
                <Col xs={2}>
                  <Image src={product.product_image} width={50}></Image>
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
        </ListGroup>
      </div>
    );
  });

  const handleComfirm = () => {
    console.log("結帳");
  };

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <div>
      <div style={{ marginBottom: "120px" }}>
        {orderLists}
        <div
          style={{ width: "fit-content", float: "right" }}
          className="d-flex align-items-center m-3"
        >
          <h5>
            總共結帳金額: $
            {usersOrder.map(e => e.totalPrice).reduce(reducer, 0)}
          </h5>
        </div>
      </div>
      <Navbar
        variant="dark"
        bg="primary"
        fixed="bottom"
        style={{ width: "100%" }}
      >
        <Nav
          className="justify-content-center text-center"
          style={{ width: "100%" }}
        >
          <Nav.Link
            style={{ width: "100%" }}
            href="#payment/success"
            onClick={handleComfirm}
          >
            <h5 className="text-white" style={{ margin: "unset" }}>
              LINE PAY 轉帳給店家
            </h5>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.shop.users,
  orders: state.shop.orders,
  products: state.shop.menu.products,
  payment: state.shop.payment
});

export default connect(
  mapStateToProps,
  null
)(PaymentFinal);
