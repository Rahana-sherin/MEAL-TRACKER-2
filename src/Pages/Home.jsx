import React from "react";
import NavbarComp from "../components/NavbarComp";
import "../assets/css/home.css";
import fastFood from "../assets/image/fast_food.jpg";
function Home() {
  
  return (
    <div>
      <NavbarComp />
      {/* <div style={{color:"white"}} className="d-flex align-items-center justify-content-center bg-secondary flex-column p-3 mt-2">
        <h2>WELCOME HOME</h2>
        <p>Your Meal tracking details</p>
      </div>
      <div style={{height:"130px", color:"white"}} className="d-flex bg-secondary align-items-center justify-content-center mt-2 flex-column">
        <div
          style={{ width: "90%" , height:"10%" }}
          className="d-flex align-items-center justify-content-between p-3"
        >
          <p>HI User</p>
          <p>Available balance : 123 AED</p>
        </div>
        <div
          style={{ width: "90%"  , height:"10%"}}
          className="d-flex align-items-center justify-content-between p-3"
        >
          <p>Store name : Adnc dubai hills</p>
          <p>Balance Expired on : Sep 01, 2024 02:00</p>
        </div>
        <div>
          <h6 style={{fontWeight:"bolder"}}>Your current period transaction details</h6>
        </div>
      </div> */}
      <div className="backgroundDiv">
        <div style={{marginLeft:"20px" , marginTop:"170px"}}>
          <b style={{fontSize:"80px"}}>Welcome Home</b>
          <p style={{fontSize:"20px"}} className="ms-4">Good food, good mood. Let us serve you happiness, one delicious bite at a time!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
