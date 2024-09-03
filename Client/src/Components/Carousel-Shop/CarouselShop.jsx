/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ayurvedic,
  diabetic_care,
  elder,
  fitness,
  motherbaby,
  musthave,
  personalcare,
  skincare,
} from "../../assets/index.js";
import { Link } from "react-router-dom";
import "./shop.css";

export default function CarouselShop() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 0,
    },
  };
  const data = [
    { id: 1, src: musthave, url: "/musthave", title: "MustHaves" },
    { id: 2, src: elder, url: "/elder", title: "Elderly Care" },
    { id: 3, src: personalcare, url: "/personalcare", title: "Personal Care" },
    { id: 4, src: skincare, url: "/skincare", title: "Skin Care" },
    {
      id: 5,
      src: motherbaby,
      url: "/motherbaby",
      title: "Mother-Baby Care",
    },
    { id: 6, src: fitness, url: "/fitness", title: "Fitness Supplements" },
    { id: 7, src: ayurvedic, url: "/ayurvedic", title: "Ayurvedic Care" },
    {
      id: 8,
      src: diabetic_care,
      url: "/diabetic_care",
      title: "Diabetic Care",
    },
  ];
  return (
    <div className="carousel-container">
      <Carousel responsive={responsive} partialVisible={true}>
        {data.map((datas, index) => (
          <div className="image-contain" key={index}>
            <div className="hover-effect">
              <Link to={datas.url}>
                <img src={datas.src} alt="FirstCard" className="image-shop" />
              </Link>
            </div>
            <span className="shop-text">{datas.title}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
