import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <BrowserRouter>

      {/* LANDING PAGE */}
      {!showApp ? (
        <div className="landing">
          <h1>e-plantShopping 🌱</h1>

          <button onClick={() => setShowApp(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <>
          {/* NAVBAR */}
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </>
      )}

    </BrowserRouter>
  );
}

export default App;