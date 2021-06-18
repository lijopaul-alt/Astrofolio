import React, { Component } from "react";
import { menuItems } from "./menuItem";
import "./NavBar.css";

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ASTROFOLIO</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {" "}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
