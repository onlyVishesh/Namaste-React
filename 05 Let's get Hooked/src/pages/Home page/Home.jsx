import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Home.css";

import { useState } from "react";
import { resData } from "../../utils/config";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  // Local State Variable
  const [resList, setResList] = useState(resData);

  return (
    <div className="home">
      <div className="search">
        <input type="text" placeholder="Search Restaurant" />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setResList(resData.filter((res) => res.info.avgRating > 4));
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Home;
