import MedicineCard from "./MedicineCard.jsx";
import { ayurvedic } from "../../assets/index.js";
import "./MedicineCard.css";

const medicines = {
  Paracetamol: {
    description: "500mg tablets",
    price_per_10_units: "₹37.5 per 10 units",
    image: ayurvedic,
  },
  Ibuprofen: {
    description: "200mg tablets",
    price_per_10_units: "₹60 per 10 units",
    image: ayurvedic,
  },
  Amoxicillin: {
    description: "500mg capsules",
    price_per_10_units: "₹250 per 10 units",
    image: ayurvedic,
  },
  Atorvastatin: {
    description: "10mg tablets",
    price_per_10_units: "₹375 per 10 units",
    image: ayurvedic,
  },
  Omeprazole: {
    description: "20mg capsules",
    price_per_10_units: "₹360 per 10 units",
    image: ayurvedic,
  },
  Metformin: {
    description: "500mg tablets",
    price_per_10_units: "₹67.5 per 10 units",
    image: ayurvedic,
  },
  Lisinopril: {
    description: "10mg tablets",
    price_per_10_units: "₹250 per 10 units",
    image: ayurvedic,
  },
  Amlodipine: {
    description: "5mg tablets",
    price_per_10_units: "₹250 per 10 units",
    image: ayurvedic,
  },
  "Albuterol Inhaler": {
    description: "90mcg inhaler",
    price_per_10_units: "₹1200 per inhaler",
    image: ayurvedic,
  },
  Cetirizine: {
    description: "10mg tablets",
    price_per_10_units: "₹60 per 10 units",
    image: ayurvedic,
  },
};

function MedicineBrand() {
  const medicineCards = Object.entries(medicines).map(
    ([title, details], index) => (
      <MedicineCard
        key={index}
        source={details.image || "default_image.png"}
        Title={title}
        Description={details.description}
        Price={details.price_per_10_units}
      />
    )
  );

  return <div className="container">{medicineCards}</div>;
}

export default MedicineBrand;
