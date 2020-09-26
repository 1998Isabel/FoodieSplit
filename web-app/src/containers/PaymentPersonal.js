import React, { useState, useEffect } from "react";
import Mydb from "../mydb.js";
import { connect } from 'react-redux';
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

// const orders = Mydb.orders;
// const products = Mydb.menu.products;

function PaymentPersonal(props) {
	const { orders, products } = props;
	const [userOrderProduct, setUserOrderProduct] = useState([]);
	const [userOrderProductImg, setUserOrderProductImg] = useState([]);

	// state = { userOrderProduct: [], userOrderProductImg: [], totalPrice: 0 };
	// componentDidMount() {
	// 	this.handleCurrentUserOrder();
	// 	this.handelFindProductImg();
	// }


	return (
		<Container style={{ margin: "0 0 80px 0", padding: "initial" }}>
			TEST
			<Row style={{ display: "flex", justifyContent: "center" }}>
				<Col>
					<Button
						style={{ position: "fixed", bottom: "30px", textAlign: "center" }}
						variant="primary"
						onClick={() => window.history.back()}
					>
						幫別人結帳
            		</Button>
				</Col>
				<Col>
					<Button
						style={{ position: "fixed", bottom: "30px" }}
						variant="secondary"
						onClick={() => (window.location.href = "/")}
					>
						自己結帳
            </Button>
				</Col>
			</Row>
		</Container>
	);
}

const mapStateToProps = state => ({
	orders: state.shop.orders,
	products: state.shop.menu.products
});

export default connect(mapStateToProps, null)(PaymentPersonal);
