/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThreeCircles } from "react-loader-spinner";
import { BrowserRouter } from "react-router-dom";

// function Root() {
//   const [loading, setLoading] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFadeOut(true);
//       const fadeTimer = setTimeout(() => {
//         setLoading(false);
//       }, 500); // Match this duration with the CSS transition duration
//       return () => clearTimeout(fadeTimer);
//     }, 2500);

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <BrowserRouter>
//       {loading ? <Loader fadeOut={fadeOut} /> : <App />}
//     </BrowserRouter>
//   );
// }

// function Loader({ fadeOut }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         opacity: fadeOut ? 0 : 1,
//         transition: "opacity 0.5s ease-out",
//       }}
//     >
//       <ThreeCircles
//         visible={true}
//         height="10rem"
//         width="10rem"
//         innerCircleColor="#17B169"
//         middleCircleColor="#00AB66"
//         outerCircleColor="#1CAC78"
//         ariaLabel="three-circles-loading"
//         wrapperStyle={{ margin: "10rem 25rem" }}
//         wrapperClass=""
//       />
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
