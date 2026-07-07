import { createSlice } from "@reduxjs/toolkit";

export const CART_STORAGE_KEY = "edgarshop-cart";

const loadCart = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity = Math.min(
          existingProduct.quantity + 1,
          existingProduct.stock
        );
        return;
      }

      state.items.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        compareAt: product.compareAt,
        image: product.image,
        category: product.category,
        stock: product.stock,
        quantity: 1,
      });
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        item.quantity = Math.min(item.quantity + 1, item.stock);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (!item) {
        return;
      }

      if (item.quantity === 1) {
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
        return;
      }

      item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
