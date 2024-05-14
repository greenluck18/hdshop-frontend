import React from "react";
import CardList from "./CardList";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Project</h1>
      <p>
        This is the homepage of our project. Browse through some featured items
        and register to get started!
      </p>

      {/* Render a few CardList components */}
      <div className="featured-cards">
        <h2>Featured Items</h2>
        <CardList />
        {/* You can add more CardList components here if needed */}
      </div>

      {/* Register Button */}
      <div className="register-button-container">
        <p>Ready to get started?</p>
      </div>
    </div>
  );
};

export default Home;