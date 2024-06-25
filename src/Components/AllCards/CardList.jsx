import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardList.css"; // Import your CSS file for styling
import { API_URL } from '../../constants';
 
const CardList = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [cards, setCards] = useState([]); // Initialize cards state as an empty array

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(API_URL + "/items");
      setCards(response.data.rows); // Assuming 'rows' contains the array of cards in the response
      
    } catch (error) {
      console.error("Error fetching cards:", error);
      setErrorMessage("An error occurred while fetching cards");
    }
  };

  return (
    <div className="user-items-container">
      <ul className="card-list">
        {cards.map((card) => (
          <li key={card.id} className="card-item">
            <img
              src={`cards/${card.picture_id}.jpg`}
              className="image-with-border"
              alt={card.name}
              width="250"
              height="250"
            />
            <div className="card-details">
              <p>{card.description}</p>
              <p>${card.price}</p>
            </div>
            <button className="buy-button">Buy</button>
          </li>
        ))}
      </ul>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CardList;
