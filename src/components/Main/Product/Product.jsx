import React from "react";
import "./Product.css";
import pro from "./img/product-description 1.svg";
import service from "./img/verified 1.svg";
import tex from "./img/cogwheel 1.svg";
import logo from "./img/Group 1317.svg";

const Product = () => {
  return (
    <div id="product">
      <div className="container">
        <div className="product">
          <div className="product-service">
            <h2>Product and Service</h2>
            <div className="products">
              <div className="our">
                <img src={pro} alt="" />
                <h3>Our Product</h3>
                <p>
                  Our product is made on the base of our team’s careful research
                  and analyses, ranging from internet based application.
                </p>
                <button>Read More</button>
              </div>
              <div className="our">
                <img src={service} alt="" />
                <h3>Our Service</h3>
                <p>
                  DSI’s shared service solutions focus on the front-end based
                  software development, designed specifically for the banking
                  and financial sectors.
                </p>
                <button>Read More</button>
              </div>
              <div className="our">
                <img src={tex} alt="" />
                <h3>Our Technology</h3>
                <p>
                  First JAVA, runs on more than 850 million personal computers
                  worldwide, and on billions of devices worldwide, including
                  mobile and TV devices.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="logo">
              <img className="img3" src={logo} alt="" />
              <h5>PT Dwidasa Samsara Indonesia</h5>
              <p>
                Ruko Jalur Sutera 29A No. 53 <br />
                Alam Sutera Serpong, Tangerang 15323
              </p>
            </div>
            <div className="email">
              <h4>Contact</h4>
              <p>
                Phone : +62.21.5314.1135 <br />
                Fax : +62.21.5314.1135 <br />
                Email : community@dwidasa.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
