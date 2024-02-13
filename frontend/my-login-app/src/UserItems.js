import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UserItems = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const storedToken = localStorage.getItem("authToken") ?? undefined;
  const login = localStorage.getItem("login") ?? undefined;
  const userId = localStorage.getItem("userId") ?? undefined;
  let cardList = '';

  useEffect(() => {
    findUserItems(); 

  }, []);


    const findUserItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/my_items', {
        headers: {
          Authorization: `${storedToken}`
        }
      });
      const cards = response.data;

          cardList = document.getElementById('cardList');
          console.log('cards:', cards ?? 'nemae');
          // Clear previous content
          cardList.innerHTML = '';

          if(cards !== undefined) {
          cards.forEach(card => {
              const listItem = document.createElement('li');
              listItem.textContent = card.name + ' ' + card.description + ' ' + card.price;
              cardList.appendChild(listItem);
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage('Invalid username or password');
        } else {
          console.error('Error logging in:', error);
          setErrorMessage('An error occurred while logging in');
        }
      }
    };

  return (

    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Your Items </div>
        <script> findUserItems()</script>
        <ul id="cardList"></ul>
        <script>
          
        </script>
      </div>
      <br />
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message if available */}
    </div>
  );
};

export default UserItems;