import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CheckoutPage.css";

function Checkout() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-7 pb-5 pe-lg-5">
              <div className="row">
                <div className="col-12 p-5">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png"
                    alt="Car_Photo"
                  />{" "}
                </div>
                <div className="row m-0 bg-light">
                  <div className="col-md-4 col-6 ps-30 pe-0 my-4">
                    <p className="text-muted">Mileage</p>
                    <p className="h5">
                      25000<span className="ps-1">Km</span>
                    </p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Transmission</p>
                    <p className="h5 m-0">Manual</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Drive unit</p>
                    <p className="h5 m-0">Front</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Body</p>
                    <p className="h5 m-0">Coupe</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Color</p>
                    <p className="h5 m-0">White</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Daily UI</p>
                    <p className="h5 m-0">#002</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-0 ps-lg-4">
              <div className="row m-0">
                <div className="col-12 px-4">
                  <div className="d-flex align-items-end mt-4 mb-2">
                    <p className="h4 m-0">
                      <span className="pe-1">ZAZ</span>
                      <span className="pe-1">966</span>
                      <span className="pe-1">B</span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Qty</p>
                    <p className="fs-14 fw-bold">1</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Subtotal</p>
                    <p className="fs-14 fw-bold">
                      <span className="fas fa-dollar-sign pe-1"></span>1,450
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Shipping</p>
                    <p className="fs-14 fw-bold">Free</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Promo code</p>
                    <p className="fs-14 fw-bold">
                      -<span className="fas fa-dollar-sign px-1"></span>100
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="textmuted fw-bold">Total</p>
                    <div className="d-flex align-text-top ">
                      {" "}
                      <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
                      <span className="h4">1,350</span>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-12 px-0">
                  <div className="row m-0">
                    <div className="col-12 px-4">
                      <div className="d-flex align-items-end mt-4 mb-2">
                        <p className="h4 m-0">
                          <span className="pe-1">Payment Method</span>
                        </p>
                      </div>
                      <div className="d-flex justify-content mb-2">
                        <span>
                          <img
                            className="cardImage"
                            src="https://www.freepnglogos.com/uploads/meijer-png-logo/get-the-meijer-paypower-visa-prepaid-card-png-logo-8.png"
                            alt="Card_Photo"
                          />
                        </span>
                        <span className="h3 mt-4">Nepcards</span>
                      </div>
                    </div>
                    <div className="col-12  p-0">
                      <Link to="/checkout" className="btn btn-primary mt-1">
                        <Button>Purchase</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
