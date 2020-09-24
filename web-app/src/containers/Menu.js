import React, { useState } from "react";
import { Link as ScrollLink, Element } from 'react-scroll'
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { addProductToOrder, removeProductfromOrder } from '../actions/shopActions';
import Item from "../components/Item";

function Menu(props) {
	const { addProductToOrder, removeProductfromOrder } = props;
	const { menu, users, orders } = props.shop;

	const categoryLink = menu.categories.map(cat => (
		<Nav.Link active>
			<ScrollLink to={cat.id} smooth={true} duration={400} offset={-60}>
				{cat.name}
			</ScrollLink>
		</Nav.Link>
	))

	const categoryItems = menu.categories.map(cat => {
		const filterItems = menu.products.filter(e => e.category === cat.id)
		return (
			<Element name={cat.id}>
				<h5 className="m-2 pl-2">{cat.name}</h5>
				{filterItems.map(item => {
					const order = orders.find(o => o.productid === item.id)
					return (
						<Item pid={item.id} name={item.name} price={item.price} users={users}
							order={order ? order.users : []} image={item.image}
							addfunc={addProductToOrder} removefunc={removeProductfromOrder} />
					)
				})}
			</Element>
		)
	})

	return (
		<>
			<Navbar variant="dark" bg="primary" sticky="top">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{categoryLink}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{categoryItems}
		</>
	);
}

const mapStateToProps = state => ({
	shop: state.shop,
	users: state.shop.users,
	orders: state.shop.orders
})

export default connect(mapStateToProps, { addProductToOrder, removeProductfromOrder })(Menu);