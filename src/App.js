import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import UserItems from './UserItems';
import Payment from './Payment';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  // window.addEventListener('beforeunload', function(event) {
  //   localStorage.removeItem("authToken");
  //   window.location.reload();
  
  // });

  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </head>
    <div className="App">
      <header>

      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/items" element={<UserItems/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
    </html>
  );
}

export default App;