import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items || []);
  const [added, setAdded] = useState([]);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://source.unsplash.com/150x150/?aloe" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://source.unsplash.com/150x150/?snakeplant" },
    { id: 3, name: "Peace Lily", price: 12, category: "Indoor", img: "https://source.unsplash.com/150x150/?lily" },

    { id: 4, name: "Cactus", price: 8, category: "Succulent", img: "https://source.unsplash.com/150x150/?cactus" },
    { id: 5, name: "Jade Plant", price: 20, category: "Succulent", img: "https://source.unsplash.com/150x150/?jadeplant" },

    { id: 6, name: "Areca Palm", price: 18, category: "Outdoor", img: "https://source.unsplash.com/150x150/?palm" }
  ];

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded([...added, plant.id]);
  };

  return (
    <div>

      {/* NAVBAR (FIXED CLASSNAME ISSUE) */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h1>Plants Collection 🌱</h1>

      {/* GROUPED BY CATEGORY */}

      {/* Indoor */}
      <h2>Indoor Plants</h2>
      {plants.filter(p => p.category === "Indoor").map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.name} width="100" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button
            onClick={() => handleAdd(p)}
            disabled={added.includes(p.id)}
          >
            {added.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}

      {/* Succulent */}
      <h2>Succulent Plants</h2>
      {plants.filter(p => p.category === "Succulent").map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.name} width="100" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button
            onClick={() => handleAdd(p)}
            disabled={added.includes(p.id)}
          >
            {added.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}

      {/* Outdoor */}
      <h2>Outdoor Plants</h2>
      {plants.filter(p => p.category === "Outdoor").map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.name} width="100" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button
            onClick={() => handleAdd(p)}
            disabled={added.includes(p.id)}
          >
            {added.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}

    </div>
  );
};

export default ProductList;