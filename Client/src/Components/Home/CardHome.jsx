/* eslint-disable react/prop-types */
import "./CardHome.css";
import {
  wandc,
  medicine,
  blogimage,
  medicare,
  gift,
  protein,
  health,
} from "../../assets/index.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardHome() {
  const data = [
    {
      src: wandc,
      alt: "Women & Child",
      id: "1",
      title: "Maternal Care",
      url: "/women&baby",
    },
    { src: medicine, alt: "Medicine", id: "2", title: "Medicines" },
    { src: blogimage, alt: "Health Blogs", id: "3", title: "Health Blogs" },
    { src: medicare, alt: "Medicare", id: "4", title: "Medicare" },
    { src: gift, alt: "Gift Box", id: "5", title: "Gift Subscribe" },
    { src: health, alt: "health products", id: "6", title: "Health Products" },
    {
      src: protein,
      alt: "Protein Supplements",
      id: "7",
      title: "Protein Boost",
    },
  ];
  const [images] = useState([...data]);
  return (
    <div className="container">
      {images.map((image) => (
        <Link to={image.url} key={image.id} className="link">
          <div key={image.id}>
            <img src={image.src} alt={image.alt} className="card-image-home" />
            <div className="flex-container">
              <span className="product-name">{image.title}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
