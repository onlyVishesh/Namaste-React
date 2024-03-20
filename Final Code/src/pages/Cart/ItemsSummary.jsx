import {
  faDrumstickBite,
  faLeaf,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/config";
import "./ItemsSummary.css";
import OrderSummary from "./OrderSummary";

const ItemsSummary = () => {
  const resMenu = useSelector((store) => store.cart.resMenu);
  const cartItems = useSelector((store) => store.cart.items);
  const [showOverlay, setShowOverlay] = useState(false);
  const { currentUser, userLoggedIn } = useAuth();

  let itemTotal = 0;
  cartItems.forEach((item) => {
    itemTotal +=
      item?.card?.info?.price / 100
        ? (item?.card?.info?.price / 100) * item.quantity
        : (item?.card?.info?.defaultPrice / 100) * item.quantity;
  });

  let deliveryCost = 30;
  if (resMenu.cards[0].card.card.info.sla.lastMileTravel > 0.5) {
    deliveryCost =
      deliveryCost +
      Math.round(resMenu.cards[0].card.card.info.sla.lastMileTravel * 0.5);
  }

  let totalGST = Math.round(itemTotal * 5) / 100;

  const dispatch = useDispatch();

  return (
    <div className="item-summary">
      {showOverlay && <OrderSummary />}
      <div className="res-summary">
        <div className="cart-res-detail">
          <img
            src={
              CDN_URL + resMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt=""
          />
          <div>
            <h4 className="cart-res-name">
              {resMenu?.cards[0]?.card?.card?.info?.name}
            </h4>
            <p className="cart-res-locality">
              {resMenu?.cards[0]?.card?.card?.info?.locality}
            </p>
          </div>
        </div>
        <div className="total-summary">
          <div className="bill">
            <h4>Bill Detail</h4>
            <div className="initial-bill">
              <div className="item-total">
                <p>Item Total</p>
                <p>₹{itemTotal}</p>
              </div>
              <div className="delivery-fee">
                <p>Delivery Fee</p>
                <p>₹{deliveryCost}</p>
              </div>
            </div>

            <hr />
            <div className="extra-fee">
              <p>GST and Restaurant Charges</p>
              <p>₹{totalGST}</p>
            </div>
            <hr />
            <div className="to-pay">
              <p>To Pay</p>
              <p>₹{Math.round(itemTotal + deliveryCost + totalGST)}</p>
            </div>
            {userLoggedIn ? (
              <button
                className="checkout"
                onClick={() => {
                  setShowOverlay(true);
                }}
              >
                Place Order
              </button>
            ) : (
              <button className="checkout">
                <Link to={"/login"}>Login To Place Order</Link>
              </button>
            )}
          </div>
        </div>

        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.card.info.id}>
              <section className="cart-item-detail">
                <div className="cart-item-info">
                  <div
                    className="cart-item-image"
                    style={{
                      backgroundImage: `url(${
                        CDN_URL + cartItem?.card?.info?.imageId
                      })`,
                    }}
                    alt=""
                  ></div>
                  <p>
                    {cartItem?.card?.info?.name} &nbsp;
                    {cartItem?.card?.info?.isVeg === 1 ? (
                      <FontAwesomeIcon
                        icon={faLeaf}
                        style={{ color: "green" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faDrumstickBite}
                        style={{ color: "red" }}
                      />
                    )}
                  </p>
                </div>

                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch(decreaseItemQuantity(cartItem.card.info.id))
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} style={{ color: "red" }} />
                  </button>
                  <p>{cartItem.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch(increaseItemQuantity(cartItem.card.info.id))
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} style={{ color: "green" }} />
                  </button>
                </div>
                <p className="total-price">
                  {cartItem?.card?.info?.price / 100
                    ? "₹" +
                      (cartItem?.card?.info?.price / 100) * cartItem.quantity
                    : "₹" +
                      (cartItem?.card?.info?.defaultPrice / 100) *
                        cartItem.quantity}
                </p>
              </section>
              <hr className="menu-item-break" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSummary;
