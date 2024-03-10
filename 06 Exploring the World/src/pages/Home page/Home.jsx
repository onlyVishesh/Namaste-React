import { faFilter, faSearch, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.css";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";

// import { resData } from "../../utils/config";

const Home = () => {
  // Local State Variable
  const [allResList, setAllResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // deploy api to my own server and using its response here to fetch data repo of deploy server https://github.com/onlyVishesh/TasteBit-Express-Server
      const data = await fetch(
        "https://tastebit-express-server.onrender.com/api/restaurants?lat=28.65420&lng=77.23730&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      const checkJsonData = async (json) => {
        for (let i = 0; i < json?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      };

      const resData = await checkJsonData(json);
      setAllResList(resData);
      setFilteredRes(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <div className="search">
        <input
          className="search-input"
          value={searchText}
          type="text"
          placeholder="Search Restaurant"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={() => {
            setFilteredRes(
              allResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filteredRes.length === allResList.length
              ? setFilteredRes(
                  filteredRes.filter((res) => res.info.avgRating > 4)
                )
              : setFilteredRes(allResList);
          }}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button className="sort-btn" onClick={() => {}}>
          <FontAwesomeIcon icon={faSort} />
        </button>
      </div>
      <div className="res-container">
        {allResList?.length === 0 ? (
          <ShimmerCards />
        ) : filteredRes.length === 0 ? (
          <div className="no-res">
            Sorry, we couldn't find any results for "
            <strong>{searchText}</strong>"
          </div>
        ) : (
          filteredRes.map((res) => {
            return <RestaurantCard key={res.info.id} resData={res} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
