import { createSlice } from "@reduxjs/toolkit";
import { CartItemsType } from "@/app/types";



export type CartState = {
  cartItems: CartItemsType[];
  totalAmount: number;
  totalQuantity: number;
};

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// ✅ helper (clean way)
const calculateTotals = (state: CartState) => {
  let amount = 0;
  let qty = 0;

  state.cartItems.forEach((item) => {
    amount += item.price * item.quantity;
    qty += item.quantity;
  });

  state.totalAmount = amount;
  state.totalQuantity = qty;
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ✅ ADD TO CART
    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      calculateTotals(state);
    },

    // ✅ REMOVE FROM CART
    removeFromCart: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      calculateTotals(state);
    },

    // ✅ CLEAR CART
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity++;
      calculateTotals(state);
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
      calculateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } =
  CartSlice.actions;

export default CartSlice.reducer;