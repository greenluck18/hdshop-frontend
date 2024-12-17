import React, { useState } from "react";
import axios from "axios";
import "./DeleteCard.css"; // You can reuse the same CSS or create a new one
import { API_URL } from '../../constants';

const DeleteCard = () => {
  const [cardId, setCardId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const storedToken = localStorage.getItem('authToken') || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming your backend accepts a DELETE request at /delete_item/:id
      await axios.delete(`${API_URL}/items/delete/${cardId}`, {
        headers: { Authorization: storedToken }
      });
      setSuccessMessage(`Card with ID ${cardId} deleted successfully`);
      setCardId("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error deleting card:", error);
      setErrorMessage("An error occurred while deleting the card. Please check the Card ID and try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="form-bo deleteCard">
      <form onSubmit={handleSubmit}>
        <h1>Delete Card</h1>
        <div className="input-box">
          <input
            type="text"
            id="cardId"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
            placeholder="Card ID"
            required
          />
        </div>
        <button type="submit">Delete Card</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default DeleteCard;
