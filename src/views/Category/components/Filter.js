

import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="sidebar_section">
        <div class="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul class="sidebar_categories">
          <li>
            <a href="{void(0)}">Men</a>
          </li>
          <li class="active">
            <a href="{void(0)}">
              <span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </span>
              Women
            </a>
          </li>
          <li>
            <a href="{void(0)}">Accessories</a>
          </li>
          <li>
            <a href="{void(0)}">New Arrivals</a>
          </li>
          <li>
            <a href="{void(0)}">Collection</a>
          </li>
          <li>
            <a href="{void(0)}">Shop</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
