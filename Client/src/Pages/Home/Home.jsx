import "./Home.css";
import { CarouselSwipe, CardHome } from "../../Components/index.js";
import Prescribe from "../../Components/Prescription/Prescribe.jsx";
import CarouselShop from "../../Components/Carousel-Shop/CarouselShop.jsx";
import MemberPlus from "../PlusPage/MemberPlus.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const input = document.getElementById("search-input");
    const placeholders = [
      "Search for Medicines",
      "Search for Healthcare Products",
      "Search for Facial Products",
      "Search for Diabetic products",
      "Search for Thyroid products",
    ];
    let currentIndex = 0;
    const changePlaceholder = () => {
      input.placeholder = placeholders[currentIndex];
      currentIndex = (currentIndex + 1) % placeholders.length;
    };
    const intervalId = setInterval(changePlaceholder, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="home-container"></div>
      <h2 className="aboutText">What Are you Looking for ?</h2>
      <div className="search-content">
        <button className="search-container">
          <span>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </span>
        </button>
        <input type="text" className="search-input" id="search-input" />
      </div>
      <CardHome />
      <CarouselSwipe />
      <Prescribe />
      <h2 className="shop">Shop By Categories</h2>
      <CarouselShop />
      <MemberPlus />
    </>
  );
}

export default Home;
