import { faFilter, faSearch, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useRestaurantCard from "../../utils/useRestaurantcard";
import "./Home.css";
import RestaurantCard, { WithClosedLabel } from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";

const Home = () => {
  const allResList = useRestaurantCard();
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showFilterSlider, setShowFilterSlider] = useState(false);
  const [sliderValue, setSliderValue] = useState(1);

  const ClosedRestaurantCard = WithClosedLabel(RestaurantCard);

  // Update filteredRes when allResList changes
  useEffect(() => {
    if (Array.isArray(allResList)) {
      setFilteredRes(allResList);
    }
  }, [allResList]);

  // Scroll to top function
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter function
  const handleFilter = () => {
    if (filteredRes.length === allResList.length) {
      setFilteredRes(
        allResList.filter((res) => res.info.avgRating >= sliderValue)
      );
    } else {
      setFilteredRes(allResList);
    }
    setShowFilterSlider(!showFilterSlider); // Toggle filter slider visibility
  };

  // Reset filter function
  const handleReset = () => {
    setSliderValue(1);
    setFilteredRes(allResList);
  };

  // Apply filter function
  const handleGo = () => {
    setFilteredRes(
      allResList.filter((res) => res.info.avgRating >= sliderValue)
    );
  };

  return (
    <div className="home">
      <div className="search">
        <input
          className="search-input"
          value={searchText}
          type="text"
          placeholder="Search Restaurant"
          onChange={(e) => setSearchText(e.target.value)}
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
        <button className="filter-btn" onClick={handleFilter}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        {/* <button className="sort-btn" onClick={() => {}}>
          <FontAwesomeIcon icon={faSort} />
        </button> */}
      </div>
      {showFilterSlider && (
        <div className="filter-container">
          <h2>Stars Above</h2>
          <div className="range-item">
            <div className="range-input">
              <input
                type="range"
                min="1"
                max="5"
                className="form-range"
                name="dataShared"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
              />
              <div className="range-line">
                <span
                  className="active-line"
                  style={{ width: `${(sliderValue - 1) * 25}%` }}
                ></span>
              </div>
              <div className="dot-line">
                <span
                  className="active-dot"
                  style={{ left: `${(sliderValue - 1) * 25}%` }}
                ></span>
              </div>
            </div>
            <ul className="filter-value">
              {[1, 2, 3, 4, 5].map((num) => (
                <li className="" key={num}>
                  <span>{num}</span>
                </li>
              ))}
            </ul>
            <div className="filter-buttons">
              <button className="filter-reset-btn" onClick={handleReset}>
                Reset
              </button>
              <button className="filter-go-btn" onClick={handleGo}>
                Go
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="res-container">
        {allResList?.length === 0 ? (
          <ShimmerCards />
        ) : filteredRes.length === 0 ? (
          <div className="no-res">
            Sorry, we couldn't find any results for "
            <strong>{searchText}</strong>"
          </div>
        ) : (
          filteredRes.map((res) => (
            <Link
              to={"/restaurants/" + res.info.id}
              key={res.info.id}
              onClick={handleClick}
            >
              {res.info.isOpen ? (
              <RestaurantCard resData={res} />
                ) : (
                  <ClosedRestaurantCard resData={res} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
