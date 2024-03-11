import {
  faDrumstickBite,
  faLeaf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CDN_URL, itemDescriptions } from "../../utils/config";

import "./RestaurantMenu.css";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  useState;
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      "https://tastebit-express-server.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResMenu(json.data);
  };
  return resMenu === null ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="res-menu">
      <div className="res-thumbnail">
        <img
          src={CDN_URL + resMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          alt=""
        />
        <div className="res-thumbnail-data">
          <h2>{resMenu?.cards[0]?.card?.card?.info?.name}</h2>
          <p>{resMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>
            {resMenu?.cards[0]?.card?.card?.info?.locality}
            {resMenu?.cards[0]?.card?.card?.info?.nearestOutletNudge
              ?.nearestOutletInfo?.siblingOutlet?.sla?.lastMileTravel
              ? ", (" +
                resMenu?.cards[0]?.card?.card?.info?.nearestOutletNudge
                  ?.nearestOutletInfo?.siblingOutlet?.sla?.lastMileTravel +
                " km)"
              : ""}
          </p>
          <section className="res-thumbnail-extras">
            <div
              className="res-thumbnail-avgRating"
              style={{
                backgroundColor:
                  resMenu?.cards[0]?.card?.card?.info?.avgRating > 3
                    ? "#57E32C"
                    : "#FF4545",
              }}
            >
              <FontAwesomeIcon icon={faStar} />{" "}
              {resMenu?.cards[0]?.card?.card?.info?.avgRating === undefined
                ? "NA"
                : resMenu?.cards[0]?.card?.card?.info?.avgRating}
            </div>
            &#8226;
            <div className="res-thumbnail-deliverTime">
              {resMenu?.cards[0]?.card?.card?.info?.nearestOutletNudge
                ?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime
                ? resMenu?.cards[0]?.card?.card?.info?.nearestOutletNudge
                    ?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime +
                  " mins"
                : "30+ mins"}
            </div>
            &#8226;
            <div className="res-thumbnail-cost-for-two">
              {resMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}
            </div>
            {resMenu?.cards[0]?.card?.card?.info?.veg ? (
              <>
                &#8226;
                <div className="res-thumbnail-isVeg">
                  <FontAwesomeIcon icon={faLeaf} style={{ color: "#008000" }} />{" "}
                  Pure Veg
                </div>
              </>
            ) : (
              ""
            )}
          </section>
        </div>
      </div>
      <div className="res-coupons">
        {resMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle.offers.map(
          (offer) => {
            return (
              <div className="res-coupon" key={offer.info.offerIds}>
                <figure>
                  <img src={CDN_URL + offer?.info?.offerLogo} alt="" />
                  <figcaption>{offer?.info?.header}</figcaption>
                </figure>
                <section className="offer-details">
                  {offer?.info?.couponCode + "  |  " + offer?.info?.description}
                </section>
              </div>
            );
          }
        )}
      </div>
      <section className="menus">
        {resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.filter((menu) => {
            return (
              menu?.card?.card?.itemCards !== undefined &&
              menu?.card?.card?.itemCards[0]?.card?.info?.imageId !== undefined
            );
          })
          .map((menu) => {
            return (
              <>
                <details className="menu" open>
                  <summary className="menu-heading">
                    {menu?.card?.card?.title +
                      " (" +
                      menu?.card?.card?.itemCards.length +
                      ")"}
                  </summary>
                  <div className="menu-items">
                    {menu?.card?.card?.itemCards?.map((item) => {
                      return (
                        <>
                          <div className="menu-item" key={item.card.info.id}>
                            <figure className="menu-item-img">
                              <div
                                className="menu-item-image"
                                style={{
                                  backgroundImage: `url(${
                                    CDN_URL + item?.card?.info?.imageId
                                  })`,
                                }}
                                alt=""
                              >
                                <button className="add-item">Add</button>
                              </div>
                            </figure>

                            <section className="item-info">
                              <div className="item-name">
                                {item?.card?.info?.name}
                                <div className="isVeg">
                                  {item?.card?.info?.isVeg === 1 ? (
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
                                </div>
                              </div>
                              <div className="item-price">
                                {item?.card?.info?.price / 100
                                  ? "₹" + item?.card?.info?.price / 100
                                  : "Currently not Available"}
                              </div>
                              <div className="item-description">
                                {item?.card?.info?.description
                                  ? item?.card?.info?.description
                                  : itemDescriptions[
                                      Math.floor(
                                        Math.random() * itemDescriptions.length
                                      )
                                    ]}
                              </div>
                            </section>
                          </div>
                          <hr className="menu-item-break" />
                        </>
                      );
                    })}
                  </div>
                </details>
                <hr className="menu-break" />
              </>
            );
          })}
      </section>
    </div>
  );
};

export default RestaurantMenu;
