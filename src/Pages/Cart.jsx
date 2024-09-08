import React from "react";
import NavbarComp from "../components/NavbarComp";
import Card from "react-bootstrap/Card";
import '../assets/css/cart.css'
import foodbg from '../assets/image/foodbg.png'
function Cart() {
  return (
    <div className="maindivs">
      <NavbarComp />
      {/* <div
        style={{ color: "white" }}
        className="d-flex align-items-center justify-content-center bg-secondary flex-column p-3 mt-2"
      >
        <h2>CART PAGE</h2>
        <p>Welcome to checkout</p>
      </div>{" "} */}
      <div className="p-3">
        <Card style={{ width: "100%" , height:"630px" , paddingLeft:"2%" , borderRadius:"20px"}} className="card">
          <Card.Body>
            <Card.Title> <b style={{fontSize:"50px"}}>Your Cart</b> </Card.Title>
            <Card.Text className="ms-3">
              Your Products
              </Card.Text>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default Cart;
