import { useEffect, useState } from "react";
import { menuApi } from "./config";

const useRestaurantMenu = (resId) => {
  const [location, setLocation] = useState({
    latitude: 28.6542,
    longitude: 77.2373,
  });
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchLocation();
    const menuApiURL = menuApi(location.latitude, location.longitude);
    fetchMenu(menuApiURL);
  }, []);

  const fetchLocation = async () => {
    const response = await fetch("https://ipapi.co/json/");

    const data = await response.json();
    const { latitude, longitude } = data;
    setLocation({ latitude, longitude });
  };

  const fetchMenu = async (menuApiURL) => {
    const data = await fetch(menuApiURL + resId);
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
