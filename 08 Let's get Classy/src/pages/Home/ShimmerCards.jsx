import { shimmerCardUnits } from "../../utils/config";
import "./ShimmerCards.css";

const ShimmerCard = () => {
  return (
    <div className="shimmer-res-cards">
      <div className="shimmer-res-card">
        <figure className="shimmer-res-image ">
          <div className="shimmer-res-img shimmer">
            <figcaption className="shimmer-res-offer shimmer"></figcaption>
          </div>
          <figcaption className="shimmer-res-name shimmer"></figcaption>
        </figure>
        <div className="shimmer-res-cuisines shimmer"></div>
        <div className="shimmer-res-location shimmer"></div>
        <section className="shimmer-extras">
          <div className="shimmer-res-avgRating shimmer"></div>
          &#8226;
          <div className="shimmer-res-deliverTime shimmer"></div>
        </section>
      </div>
    </div>
  );
};

const ShimmerCards = () => {
  return (
    <>
      {new Array(shimmerCardUnits).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </>
  );
};

export default ShimmerCards;
