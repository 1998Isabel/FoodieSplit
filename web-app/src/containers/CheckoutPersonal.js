import React, { useState, useEffect } from "react";
import Mydb from "../mydb.js";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPersonPrice } from '../actions/shopActions';
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

function CheckoutPersonal(props) {
	const { orders, products, loginuser, setPersonPrice } = props;
	const [userOrderProduct, setUserOrderProduct] = useState([]);
	const [userOrderProductImg, setUserOrderProductImg] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		console.log("Effect", userOrderProduct, totalPrice)
		handleCurrentUserOrder();
	}, [orders])

	const handleCurrentUserOrder = () => {
		// let { totalPrice, userOrderProduct } = this.state;
		let tempOrderProduct = []
		let tempTotal = 0
		orders.forEach(order => {
			tempOrderProduct.push(
				...Array.from(order.users, user => {
					if (user.includes("u01")) {
						const product_eachPrice = Math.ceil(
							order.product_price / user.length
						);
						tempTotal += product_eachPrice;
						const the_product = products.find(e => e.id === order.productid)
						return {
							product_price: the_product.price,
							product_name: the_product.name,
							product_eachPrice,
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

		// this.setState({ userOrderProduct, totalPrice });
		console.log("TEMP", tempOrderProduct)
		setUserOrderProduct(tempOrderProduct)
		setTotalPrice(tempTotal)
	};

	const handleComfirm = () => {
		console.log("Comfirm")
		setPersonPrice(loginuser.id, totalPrice)
	}

	return (
		<Container style={{ margin: "0 0 80px 0", padding: "initial" }}>
			<Card style={{ border: "none" }}>
				<Navbar bg="primary" sticky="top">
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
					<Link to="/menu" className="text-white">
						<Button
							style={{ position: "fixed", bottom: "30px" }}
							variant="primary"
							// onClick={() => window.history.back()}
						>
							返回
            			</Button>
					</Link>
				</Col>
				<Col xs={2}>
					<Link to="/payment" className="text-white">
						<Button
							style={{ position: "fixed", bottom: "30px" }}
							variant="secondary"
						onClick={handleComfirm}
						>
							確認
            			</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

const mapStateToProps = state => ({
	orders: state.shop.orders,
	products: state.shop.menu.products,
	loginuser: state.shop.loginuser
});

export default connect(mapStateToProps, { setPersonPrice })(CheckoutPersonal);
