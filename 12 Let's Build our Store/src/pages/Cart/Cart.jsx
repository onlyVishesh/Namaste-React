import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import ItemsSummary from "./ItemsSummary";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart">
      <h2>CheckOut</h2>
      {CartItems.length === 0 ? (
        <p className="no-item">
          Cart is Empty,
          <span>
            <Link to="/">Continue Browsing ?</Link>
          </span>
        </p>
      ) : (
        <ItemsSummary />
      )}
    </div>
  );
};

export default Cart;
