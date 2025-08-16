import React, { useState } from "react";
import { MdRoomService, MdDirectionsCar, MdPool, MdOutlineVpnKey, MdFitnessCenter } from "react-icons/md";
import { FaShuttleVan, FaSpa, FaWifi, FaUtensils } from "react-icons/fa";
import "../assets/stylesheet/Amenities.css";

const amenities = [
  { icon: <MdRoomService />, label: "Room Cleaning" },
  { icon: <MdDirectionsCar />, label: "Car Parking" },
  { icon: <MdPool />, label: "Swimming Pool" },
  { icon: <FaShuttleVan />, label: "Pick Up & Drop" },
  { icon: <FaSpa />, label: "Spa Center" },
  { icon: <MdOutlineVpnKey />, label: "Smart Key" },
  { icon: <FaWifi />, label: "Home Wifi" },
  { icon: <FaUtensils />, label: "Breakfast" },
  { icon: <MdFitnessCenter />, label: "Fitness Gym" },
];

const faqs = [
  {
    q: "Do you pay before or after booking a hotel?",
    a: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "What documents are needed for hotel booking?",
    a: "Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in. Pellentesque consectetur rhoncus lobortis.",
  },
];

const Amenities = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="amenities">
      <h2 className="amenities-title">Amenities</h2>

      {/* Amenities Grid */}
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-card">
            <div className="amenity-icon">{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="amenities-title">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h4>{faq.q}</h4>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
