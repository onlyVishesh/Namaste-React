import { faLeaf, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RestaurantCard.css";

import { CDN_URL } from "../../utils/config";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    cuisines,
    avgRating,
    veg,
    sla,
    aggregatedDiscountInfoV3,
  } = props?.resData?.info;

  return (
    <div className="res-cards">
      <div className="res-card">
        <figure className="res-image">
          <div
            className="res-img"
            alt={name}
            style={{
              backgroundImage: `url(${CDN_URL + cloudinaryImageId})`,
            }}
          >
            <figcaption className="res-offer">
              {aggregatedDiscountInfoV3?.header}{" "}
              {aggregatedDiscountInfoV3?.subHeader}
            </figcaption>
          </div>
          <figcaption className="res-name">{name}</figcaption>
        </figure>
        <div className="res-cuisines">
          {cuisines.join(", ").length > 35
            ? cuisines.join(", ").slice(0, 37).toLowerCase() + "..."
            : cuisines.join(", ").toLowerCase()}
        </div>
        <div className="res-location">{locality?.toLowerCase()}</div>
        <section className="extras">
          <div
            className="res-avgRating"
            style={{ backgroundColor: avgRating > 3 ? "#57E32C" : "#FF4545" }}
          >
            <FontAwesomeIcon icon={faStar} />{" "}
            {avgRating === undefined ? "NA" : avgRating}
          </div>
          &#8226;
          <div className="res-deliverTime">{sla.deliveryTime} mins</div>
          {veg ? (
            <>
              &#8226;
              <div className="res-isVeg">
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
  );
};

export const WithClosedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="closed-res">
        <label className="closed-res-label">Closed</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
