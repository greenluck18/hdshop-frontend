import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserItems from "./UserItems";
import CardList from "./CardList"; // Import the CardList component
import RegistrationForm from "./RegistrationForm";
import Header from "./Header"; // Import the Header component
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/items" element={<UserItems />} />
          <Route path="/allCards" element={<CardList />} />
          {/* New route for CardList component */}
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
