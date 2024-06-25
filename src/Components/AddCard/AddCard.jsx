import React, { useState } from "react";
import axios from "axios";
import "./AddCard.css"; // Import your CSS file for styling
import { API_URL } from '../../constants';

const CreateCard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pictureId, setPictureId] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const storedToken = urlParams.get('authToken') || '';

  console.log(storedToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCard = {
        name,
        price: parseFloat(price),
        picture_id: pictureId,
        description,
        headers: { Authorization: storedToken }
      };
      await axios.post(API_URL + "/create_item", newCard);
      setSuccessMessage("Card created successfully");
      setName("");
      setPrice("");
      setPictureId("");
      setDescription("");
    } catch (error) {
      console.error("Error creating card:", error);
      setErrorMessage("An error occurred while creating the card");
    }
  };

  return (

      <div className="form-bo addCard">
        <form onSubmit={handleSubmit}>
          <h1>Create Card</h1>
          <div className="input-box">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="pictureId"
              value={pictureId}
              onChange={(e) => setPictureId(e.target.value)}
              placeholder="Picture ID"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
          </div>
          <button type="submit">Create Card</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>

  );
};

export default CreateCard;
