import React from "react";
import "../Layouts/navfooter.css";
import img1 from "../images/header.png";
import { Link } from "react-router-dom";


const Navfooter = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12">
              <h2>Sport Club</h2>
              <p className="footer-content">
              Elite sports brand crafting high-performance gear and apparel, 
              merging innovation with style to elevate athletes' performance 
              and inspire excellence on the field and beyond.
              </p>

              <div className="footer-icon">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-12">
              <h4>Pages</h4>
              <div className="footer-link">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-12">
                <h3>Contact Info</h3>
                <div className="footer-info">
                <p>info@sportclub.in</p>
                <p>138/A, H.M Road. Kolkata - 131</p>
                <p>+91-7044197767</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navfooter;
