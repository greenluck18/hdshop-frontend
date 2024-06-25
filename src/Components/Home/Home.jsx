import React, { useState, useEffect, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import "./Home.css"; // Import your CSS file for styling
import { API_URL } from '../../constants';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [cards, setCards] = useState([]); // Initialize cards state as an empty array

  const fetchCards = async () => {
    try {
      const response = await axios.get(API_URL + "/items");
      console.log(response.data); // Debugging line to check the response data
      setCards(response.data.rows); // Assuming 'rows' contains the array of cards in the response
    } catch (error) {
      console.error("Error fetching cards:", error);
      setErrorMessage("An error occurred while fetching cards");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const memoizedCards = useMemo(() => cards, [cards]);

  return (
    <div className="home-container">
      {/* Render a few CardList components */}
      <div className="featured-cards" style={{ width: "800px", height: "700px" }}>
        <div className="user-items-container">
          <Slider {...settings}>
            {memoizedCards.map((card) => (
              <div key={card.id} className="card-item">
                <img
                  src={`cards/${card.picture_id}.jpg`}
                  alt={card.name}
                  width="250"
                  height="250"
                  className="image-with-border"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "default.jpg"; // Fallback image if there is an error
                  }}
                />
                <div className="card-details">
                  {/* <p>{card.name}</p> */}
                  <p>{card.description}</p>
                  {/* <p>${card.price}</p> */}
                  <button className="buy-button">Buy</button>
                </div>
              </div>
            ))}
          </Slider>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        {/* You can add more CardList components here if needed */}
      </div>

      {/* Register Button */}
      <div className="register-button-container"></div>
    </div>
  );
};

export default Home;
