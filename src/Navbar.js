import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {

    const cartobj = useSelector(store => store.cartReducer)

  return (

      <nav
        className="navbar navbar-inverse"
        style={{ backgroundColor: "blue" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" style={{ color: "white" }} href="/">
              Ecommerce
            </a>
          </div>
          <div>
            <ul className=" navbar-nav ">
              <li className="active">
                <a style={{ color: "white" }} href="/">
                  Home
                </a>
              </li>
              <li className="active">
                <a style={{ color: "white" }} href="/additem">
                  Additem
                </a>
              </li>
            </ul>
          </div>

          <ul className="nav navbar-nav navbar-right m-1 auto">
            <li>
              <a style={{ color: "white" }} href="/cart">
                <span className="glyphicon glyphicon-user"></span> Cart : {cartobj.cartitems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
  );
}
