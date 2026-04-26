import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  // get cart items from redux
  const cartItems = useSelector((state) => state.cart.items);

  // calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      {/* NAVBAR */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Your Cart 🛒</h1>

      {/* IF CART EMPTY */}
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>

            {/* QUANTITY CONTROLS */}
            <button onClick={() => dispatch(increaseQty(item.id))}>
              +
            </button>

            <button onClick={() => dispatch(decreaseQty(item.id))}>
              -
            </button>

            {/* DELETE ITEM */}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Delete
            </button>

          </div>
        ))
      )}

      {/* TOTAL PRICE */}
      <h2>Total Amount: ${totalPrice}</h2>

      {/* CHECKOUT BUTTON */}
      <button onClick={() => alert("Coming Soon 🚧")}>
        Checkout
      </button>

      {/* CONTINUE SHOPPING */}
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
};

export default CartItem;