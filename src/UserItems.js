import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UserItems = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const storedToken = localStorage.getItem("authToken") ?? undefined;
  const login = localStorage.getItem("login") ?? undefined;
  const userId = localStorage.getItem("userId") ?? undefined;
  let cardList = '';

  useEffect(() => {
    findUserItems();

  }, []);

  const onButtonClick = async (event) => {
      try {
        navigate('/payment');
      } catch (error) {
        console.error('Error:', error);
      }
};

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

      if (cards !== undefined) {
        cards.forEach(card => {
          const listItem = document.createElement('li');
          listItem.textContent = card.name + ' ' + card.description + ' ' + card.price;

          const imgElement = document.createElement("img");
          imgElement.src = "cards/" + card.picture_id + ".jpg";
          imgElement.width = "250";
          imgElement.height = "250";

          const btnElement = document.createElement("button");
          btnElement.textContent = "Buy"; // Set the text content of the button
          btnElement.onclick = onButtonClick; // Set the onclick event for the button

          cardList.appendChild(imgElement);
          cardList.appendChild(listItem);
          cardList.appendChild(btnElement);
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


    <div className={"image-row"}>
      {/* <section className="products" id="product">
        <div  className="box-container">
          <div className="box">
            
          </div>
          </div>
      </section> */}
      <ul id="cardList"></ul>
      <br />
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message if available */}
    </div>
  );
};

export default UserItems;