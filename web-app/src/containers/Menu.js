import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import Mydb from "./mydb.json";

const menu = Mydb.menu;
function Menu() {
	const [category, setCategory] = useState("")

	const handleCategorySelect = category => {
		console.log(category.target)
		setCategory(category);
	};

	return (
		<>
			<Row
				style={{
					background: "black",
					justifyContent: "center",
					padding: "10px"
				}}
			>
				<div>
					{menu.categories.map(cat => (
						<Button
							style={{ marginRight: "5px" }}
							key={cat.id}
							variant="light"
							onClick={(e) => handleCategorySelect(e.target.value)}
							value={cat.name}
						>
							{cat.name}
						</Button>
					))}
				</div>
			</Row>
			<span>{category}</span>
			{menu.products.map(product => (
				<Row></Row>
			))}
		</>
	);
}

export default Menu;