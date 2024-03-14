import { faFilter, faSearch, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useRestaurantCard from "../../utils/useRestaurantcard";
import useStatus from "../../utils/useStatus";
import "./Home.css";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";

import Offline from "../../components/Offline";

const Home = () => {
  const allResList = useRestaurantCard();
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Update filteredRes when allResList changes
  useEffect(() => {
    if (Array.isArray(allResList)) {
      setFilteredRes(allResList);
    }
  }, [allResList]);
  // console.log(filteredRes);
  // Scroll to top function
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Online status
  const onlineStatus = useStatus();

  // Render
  if (!onlineStatus) return <Offline />;

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
            return (
              <Link
                to={"/restaurants/" + res.info.id}
                key={res.info.id}
                onClick={handleClick}
              >
                <RestaurantCard resData={res} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
