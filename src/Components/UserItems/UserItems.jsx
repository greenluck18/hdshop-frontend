import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserItems.css'; // Import your CSS file for styling
import { API_URL } from '../../constants';


const UserItems = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [cards, setCards] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const storedToken = urlParams.get('authToken') || '';

  useEffect(() => {
    findUserItems();
  }, []);

  const findUserItems = async () => {
    try {
      const response = await axios.get(API_URL + '/my_items', {
        headers: { Authorization: storedToken }
      });
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching user items:', error);
      setErrorMessage('An error occurred while fetching items');
    }
  };

  return (
    <div className="user-items-container">
      <ul className="card-list">
        {cards.map(card => (
          <li key={card.id} className="card-item">
            <img
              src={`cards/${card.picture_id}.jpg`}
              alt={card.name}
              width="250"
              height="250"
            />
            <div className="card-details">
              <p>{card.description}</p>
              <p>${card.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          </li>
        ))}
      </ul>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default UserItems;