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
        <h1
          className={
            this.props.isDarkMode ? "navbar-logo dark" : "navbar-logo light"
          }
        >
          {`<ASTROFOLIO>`}
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked
                ? this.props.isDarkMode
                  ? "fa fa-times "
                  : "fa fa-times light"
                : "fa fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => (
            <li key={index} onClick={this.handleClick}>
              <a
                className={
                  this.props.isDarkMode ? item.cName : "nav-links-light"
                }
                href={item.url}
              >
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
