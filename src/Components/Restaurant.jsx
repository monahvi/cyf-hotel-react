import React from "react";
import Order from "./Order";


const Restaurant = () => {
  return (
    <div  className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizza" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;
