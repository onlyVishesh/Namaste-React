import ReactDOM from "react-dom/client";

import "./style.css"

import Header from "./components/Header";
import Home from "./pages/Home page/Home";
import Footer from "./components/Footer";

// Structure
/*
  HOME Page

  1. Navbar
    i) logo
    ii) links like home, about, contact etc
    iii) Cart
    iv) login
    reference link https://codepen.io/zaki-doob/pen/GRepWdy
  2. Body
    i) Search bar and search button
    ii) restaurant cards
      1. image
      2. name
      3. catagories
      4. rating
      5. extra info based on api
  3. Footer
    i) name and logo
    ii) social media links
    iii) quick links for about, privacy policy t&c ect
    iv) copyright
    v) download app buttons
    for reference https://codepen.io/enjamulislam/pen/XWOojBp

*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
