import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";


function Order({orderType}) {
      const [orders, setOrders] = useState(0);
      const ClickHandler = () => {
        setOrders(orders + 1);
      };

      return (
        <li>
        {orderType}:{orders}
        <RestaurantButton orderOne={ClickHandler}/>
        </li>
      );
};
export default Order;