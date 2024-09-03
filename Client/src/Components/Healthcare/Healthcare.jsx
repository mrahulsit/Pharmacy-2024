import "./Healthcare.css";
import { Pharmacy } from "../../assets/index.js";

const HealthCare = () => {
  return (
    <div>
      <header>
        <div className="top_bar">
          <div className="top_fir">Home</div>
          <div className="top_im">
            <img
              src="https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png"
              alt=""
            />
          </div>
          <div className="top_sec">Order Medicine Online</div>
        </div>
      </header>

      <div className="medic">
        <h1>Order Medicine Online</h1>
      </div>

      <div id="carterer">
        <div className="cart_box">
          <div className="cart_box1">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/8bfde66a.svg"
              alt=""
            />
            <p>Flat 15% off</p>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/adb9b646.svg"
              alt=""
            />
            <p>1 Lakh+Products</p>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/9279f530.svg"
              alt=""
            />
            <p>Easy Return</p>
          </div>
          <div className="cart_box2">
            <p>Search for Medicines/Healthcare Products</p>
          </div>
          <div className="cart_box3">
            <p>Select Pincode</p>
            <img
              src="https://image.flaticon.com/icons/png/128/25/25243.png"
              alt=""
            />
            <input
              type="text"
              placeholder="e.g. Ecosprin, Telma or Colgate"
              className="Search"
              id="search12345"
            />
            <a className="search" href="#">
              <img
                src="https://image.flaticon.com/icons/png/128/2089/2089805.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="cart_right">
          <div className="first_class">
            <div className="first_img">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/ef63c33a.svg"
                alt=""
              />
            </div>
            <div className="first_para1">Order via Prescriptions</div>
            <div className="img_fir">
              <img
                src="https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png"
                alt=""
              />
            </div>
          </div>
          <div className="second_class">
            <div className="first_img">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/8dfc9006.svg"
                alt=""
              />
            </div>
            <div className="first_para">Don’t have a Prescription?</div>
            <div className="img_fir">
              <img
                src="https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div id="imagesbar">
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/0ad2d80a.png"
          alt=""
        />
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/6e630ccf.png"
          alt=""
        />
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/c9bd8df2.png"
          alt=""
        />
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/748e0da8.png"
          alt=""
        />
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/aada0d0d.png"
          alt=""
        />
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/091811c4.png"
          alt=""
        />
      </div>

      <div className="offers">
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg"
          alt=""
        />
        <h2>Offers Just For You</h2>
      </div>
      <div
        className="carousel car_1"
        data-flickity='{ "groupCells": 4,"autoplay":true  }'
      >
        <div className="carousel-cell car_2">
          <div className="offerslide sli_1">
            <img src={Pharmacy} alt="" />
            <div className="pa_1">
              <p>
                Flat 20% off + 20% <br />
                Cashback on your 1st... <br />
                Code: STAYHOME
              </p>
            </div>
          </div>
        </div>
        {/* Add more carousel items here */}
      </div>

      <div className="Qu">
        <h4>Get 3-Step Quality-Checked Medicines</h4>
        <p>
          `PharmEasy is a one-stop-shop for all your healthcare needs. We have
          1L+ products for you to choose from. Buy medicines online at
          affordable prices from the comforts of your home in just a few clicks
          and get them delivered at your doorstep. <br />
          The entire process of shopping for medicines is hassle-free and
          convenient. All you have to do is search for the products you need on
          our website or app, add to cart and then proceed with the checkout
          process. <br />
          With our scheduled refill reminder, you don&apos;t even need to keep
          track of your refill dates. <br />
          What&apos;s more, we have great offers, with added discounts and
          massive e-wallet cashbacks on purchasing medicines!
        </p>
      </div>
    </div>
  );
};

export default HealthCare;
