import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Mydb from "./mydb.json";

const menu = Mydb.menu;
export default class Menu extends Component {
  state = { category: "" };
  handleCategorySelect = category => {
      console.log(category.target)
    this.setState({ category });
  };

  render() {
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
            {menu.categories.map(category => (
              <Button
                style={{ marginRight: "5px" }}
                key={category.id}
                variant="light"
                onClick={(e)=>this.handleCategorySelect(e.target.value)}
                value={category.name}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </Row>
        <span>{this.state.category}</span>
        {menu.products.map(product => (
          <Row></Row>
        ))}
      </>
    );
  }
}
