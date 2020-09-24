import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { addProductToOrder } from '../actions/shopActions';
import Item from "../components/Item";

function Menu(props) {
	const { addProductToOrder } = props;
	const { menu, users, orders } = props.shop;
	const [category, setCategory] = useState("")

	const handleCategorySelect = category => {
		setCategory(category);
	};

	const categoryLink = menu.categories.map(cat => (
		<Button
			style={{ marginRight: "5px" }}
			key={cat.id}
			variant="light"
			onClick={(e) => handleCategorySelect(e.target.value)}
			value={cat.name}
		>
			{cat.name}
		</Button>
	))

	const categoryItems = menu.categories.map(cat => {
		const filterItems = menu.products.filter(e => e.category === cat.id)
		return (
			<>
				<h5 className="m-2">{cat.name}</h5>
				{filterItems.map(item => {
					const order = orders.find(o => o.productid === item.id)
					return (
						<Item pid={item.id} name={item.name} price={item.price} users={users}
							order={order?order.users:[]} image={item.image} addfunc={addProductToOrder}/>
					)
				})}
			</>
		)
	})
	console.log(orders)
	return (
		<>
			<Row
				style={{
					background: "black",
					justifyContent: "center",
					padding: "10px",
					margin: "unset"
				}}
			>
				<div>
					{categoryLink}
				</div>
			</Row>
			<span>{category}</span>
			{categoryItems}
		</>
	);
}

const mapStateToProps = state => ({
	shop: state.shop,
	users: state.shop.users,
	orders: state.shop.orders
})

export default connect(mapStateToProps, { addProductToOrder })(Menu);