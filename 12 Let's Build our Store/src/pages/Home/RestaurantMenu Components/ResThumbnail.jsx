import { faLeaf, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { CDN_URL } from "../../../utils/config";

import "./ResThumbnail.css";

const ResThumbnail = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    avgRating,
    costForTwoMessage,
    veg,
    sla,
  } = props?.resMenuThumbnail;
  return (
    <div className="res-thumbnail">
      <img src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="res-thumbnail-data">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>
          {locality}
          {sla?.lastMileTravel ? ", (" + sla?.lastMileTravel + " km)" : ""}
        </p>
        <section className="res-thumbnail-extras">
          <div
            className="res-thumbnail-avgRating"
            style={{
              backgroundColor: avgRating > 3 ? "#57E32C" : "#FF4545",
            }}
          >
            <FontAwesomeIcon icon={faStar} />{" "}
            {avgRating === undefined ? "NA" : avgRating}
          </div>
          &#8226;
          <div className="res-thumbnail-deliverTime">
            {sla.deliveryTime ? sla.deliveryTime + " mins" : "30+ mins"}
          </div>
          &#8226;
          <div className="res-thumbnail-cost-for-two">{costForTwoMessage}</div>
          {veg ? (
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
  );
};

export default ResThumbnail;
