import foodImage from "../../assets/images/food.svg";
import { features } from "../../utils/config";
import "./About.css";
import Features from "./Features";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-header">
          <h1><span>Discover</span> a World of Flavor</h1>
          <h1>with <span>TasteBit Express</span></h1>
        </div>
        <div className="about-des">
        <div className="about-text">
          <div className="about-description">
            <p>
              TasteBit Express is not just another food delivery platform - it's
              a culinary adventure waiting to happen. We're dedicated to
              bringing you the best flavors from around the world, right to your
              doorstep. Whether you're craving comforting classics, exotic
              cuisines, or healthy alternatives, we've got you covered.
            </p>
            <p>
              Our platform is designed with you in mind, offering intuitive
              navigation, real-time updates, and personalized recommendations
              based on your location. With TasteBit Express, you can explore new
              tastes, support local restaurants, and indulge in delicious meals
              without ever leaving your home.
            </p>
          </div>
          <div className="about-quote">
            <p>
              "Savor the moment with TasteBit Express - where every bite tells a
              story."
            </p>
          </div>
        </div>
        <div className="about-image">
          <img src={foodImage} alt="Food" />
        </div>
      </div></div>
      <div className="features">
        {features.map((feature) => {
          return <Features feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default About;
