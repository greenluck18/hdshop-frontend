import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserItems from "./Components/UserItems/UserItems";
import CardList from "./Components/AllCards/CardList"; // Import the CardList component
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Header from "./Components/Header/Header"; // Import the Header component
import Footer from "./Components/Footer/Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> {/* Include the Header component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            {/* <Route path="/registration" element={<RegistrationForm />} /> */}
            {/* <Route path="/registration" element={<LoginRegister />} /> */}
            <Route path="/myItems" element={<UserItems />} />
            <Route path="/allCards" element={<CardList />} />
            {/* Include the Header component */}
            {/* New route for CardList component */}
          </Routes>
        <Footer /> {/* Include the Footer component */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
