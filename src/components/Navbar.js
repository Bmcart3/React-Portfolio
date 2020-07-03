import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "Profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu tabular>
        <Menu.Item
          as={Link}
          name="Profile"
          to="/profile"
          active={activeItem === "Profile"}
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Item
          as={Link}
          name="Portfolio"
          to="/portfolio"
          active={activeItem === "Portfolio"}
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Item
          as={Link}
          name="Contact"
          to="/contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        ></Menu.Item>
      </Menu>
    );
  }
}
