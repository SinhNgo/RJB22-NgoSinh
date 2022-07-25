import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/customer/list">Customer List</NavLink>
        </li>
        <li>
          <NavLink to="/customer/form">Customer Form</NavLink>
        </li>
        <li>
          <NavLink to="/product/list">Product List</NavLink>
        </li>
        <li>
          <NavLink to="/product/form">Product Form</NavLink>
        </li>
      </ul>
    </div>
  );
}
