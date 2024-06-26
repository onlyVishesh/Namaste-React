import { faDrumstickBite, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

import { CDN_URL, itemDescriptions } from "../../utils/config";

import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ResThumbnail from "./RestaurantMenu Components/ResThumbnail";
import "./RestaurantMenu.css";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  return resMenu.length === 0 ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="res-menu">
      <ResThumbnail resMenuThumbnail={resMenu?.cards[0]?.card?.card?.info} />
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
                                <button className="add-item">ADD</button>
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
                                  : item?.card?.info?.defaultPrice / 100
                                  ? "₹" + item?.card?.info?.defaultPrice / 100
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
