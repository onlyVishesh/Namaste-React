import { useEffect, useState } from "react";
import { cardApi } from "./config";

const useRestaurantCard = () => {
  const [location, setLocation] = useState({
    latitude: 28.6542,
    longitude: 77.2373,
  });
  const [allResList, setAllResList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchLocation();
    const cardApiURL = cardApi(location.latitude, location.longitude);
    fetchCard(cardApiURL);
  }, []);

  const fetchLocation = async () => {
    const response = await fetch("https://ipapi.co/json/");

    const data = await response.json();
    const { latitude, longitude } = data;
    setLocation({ latitude, longitude });
  };

  const fetchCard = async (CardApi) => {
    try {
      const data = await fetch(CardApi);
      const text = await data.text();

      // Check if the response is valid JSON
      try {
        const json = JSON.parse(text);

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
      } catch (jsonError) {
        // Handle JSON parsing error
        console.log("Failed to parse JSON:", jsonError);
        setError("Failed to parse JSON");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Fetch error:", error);
      setError("An error occurred while fetching data");
    }
  };

  return allResList;
};

export default useRestaurantCard;
