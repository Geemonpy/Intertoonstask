import React from "react";

const main = () => {
  return (
    <>
      <div className="hero border-1 pb-5">
        <div className="card bg-dark text-white border-0 mx-5">
          {/* <img
            className="card-img img-fluid"
            src="./assets/food.jpeg"
            alt="Card"
            height={300}
          /> */}
          <div className="card-img-overlay d-flex align-items-bottom">
            <div className="container" >
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover the art of flavor and indulge in culinary excellence with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
