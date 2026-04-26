import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // ✅ ADD ITEM
    addItem: (state, action) => {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ❌ REMOVE ITEM COMPLETELY
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    // 🔼 UPDATE QUANTITY (increase/decrease)
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.items.find(i => i.id === id);

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease") {
          item.quantity -= 1;

          // remove if quantity becomes 0
          if (item.quantity <= 0) {
            state.items = state.items.filter(i => i.id !== id);
          }
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;