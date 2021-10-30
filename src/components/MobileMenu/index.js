

import React, { Component } from "react";
import PropTypes from "prop-types";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={
          this.props.activeClass ? "hamburger_menu active" : "hamburger_menu"
        }
      >
        <div className="hamburger_close" onClick={this.props.onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item has-children">
              <a href="{void(0)}">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="{void(0)}">cad</a>
                </li>
                <li>
                  <a href="{void(0)}">aud</a>
                </li>
                <li>
                  <a href="{void(0)}">eur</a>
                </li>
                <li>
                  <a href="{void(0)}">gbp</a>
                </li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="{void(0)}">
                English
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="{void(0)}">French</a>
                </li>
                <li>
                  <a href="{void(0)}">Italian</a>
                </li>
                <li>
                  <a href="{void(0)}">German</a>
                </li>
                <li>
                  <a href="{void(0)}">Spanish</a>
                </li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="{void(0)}">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="{void(0)}">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                  </a>
                </li>
                <li>
                  <a href="{void(0)}">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">home</a>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">shop</a>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">promotion</a>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">pages</a>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">blog</a>
            </li>
            <li className="menu_item">
              <a href="{void(0)}">contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
MobileMenu.propTypes = {
  activeClass: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileMenu;
