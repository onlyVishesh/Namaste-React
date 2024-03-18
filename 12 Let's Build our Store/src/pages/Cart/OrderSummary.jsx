import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./OrderSummary.css";

import { clearCart } from "../../utils/cartSlice";
const makeId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const OrderSummary = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <div className="order-summary">
      <div className="order-message">
        <h2 className="order-message-header">Thank You For Placing order</h2>
        <p>Your order Will be Delivered Soon</p>
        <div className="order-id">
          <h4>Order Id -</h4> <p>{makeId(Math.random() * (9 - 7) + 7)}</p>
        </div>
        <button
          className="clear-cart"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          <Link to="/">Continue Browsing ?</Link>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
