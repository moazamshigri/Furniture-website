import React, { useEffect, useState } from "react";
import axios from "axios";
import TestCard from "./TestCard";
import "./TestCard"

const Testimonies = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/testimonies/")
      .then(res => {
        setTests(res.data); // save API data in state
      })
      .catch(err => {
        console.error("Error fetching testimonies:", err);
      });
  }, []); // empty array = run once on mount

  return (
    <section className="testimonies" >
        <h3>Testimonies</h3>
        <h2>Our Clients Reviews</h2>
        <div className="testimonials-container">

      {tests.map(t => (
          <TestCard
          key={t.id}
          name={t.name}
          location={t.location}
          feedback={t.feedback}
          profile_pic={t.profile_pic}
          />
        ))}
        </div>
    </section>
  );
};

export default Testimonies;
