import "./RestaurantMenuShimmer.css";

const RestaurantMenuShimmer = () => {
  return (
    <div className="res-shimmer-menu">
      <div className="res-shimmer-thumbnail">
        <div className="res-shimmer-thumbnail-img shimmer"></div>
        <div className="res-shimmer-thumbnail-data">
          <h2 className="shimmer"></h2>
          <p className="p1 shimmer"></p>
          <p className="p2 shimmer"></p>
          <section className="res-shimmer-thumbnail-extras">
            <div className="res-shimmer-thumbnail-avgRating shimmer"></div>
            &#8226;
            <div className="res-shimmer-thumbnail-deliverTime shimmer"></div>
            &#8226;
            <div className="res-shimmer-thumbnail-cost-for-two shimmer"></div>
          </section>
        </div>
      </div>
      <div className="res-shimmer-coupons">
        {new Array(4).fill(0).map((element, index) => {
          return (
            <div className="res-shimmer-coupon" key={index}>
              <figure>
                <div className="shimmer"></div>
                <figcaption className="shimmer"></figcaption>
              </figure>
              <section className="shimmer-offer-details">
                <div className="shimmer-offer-info shimmer"></div> |{" "}
                <div className="shimmer-offer-description shimmer"> </div>
              </section>
            </div>
          );
        })}
      </div>
      <section className="shimmer-menus">
        {new Array(4).fill(0).map((element, index) => {
          return (
            <>
              <details className="shimmer-menu" open>
                <summary className="shimmer-menu-heading">
                  <div className="shimmer"></div>
                </summary>
                <div className="shimmer-menu-items">
                  {new Array(5).fill(0).map((element, index) => {
                    return (
                      <>
                        <div className="shimmer-menu-item" key={index}>
                          <figure className="shimmer-menu-item-img">
                            <div
                              className="shimmer-menu-item-image shimmer"
                              alt=""
                            >
                              <button className="shimmer-add-item shimmer"></button>
                            </div>
                          </figure>

                          <section className="shimmer-item-info">
                            <div className="shimmer-item-name shimmer">
                              <div className="shimmer-isVeg">
                                <div className="shimmer"></div>
                              </div>
                            </div>
                            <div className="shimmer-item-price shimmer"></div>
                            <div className="shimmer-item-description shimmer"></div>
                          </section>
                        </div>
                        <hr className="shimmer-menu-item-break" />
                      </>
                    );
                  })}
                </div>
              </details>
              <hr className="shimmer-menu-break" />
            </>
          );
        })}
      </section>
    </div>
  );
};

export default RestaurantMenuShimmer;
