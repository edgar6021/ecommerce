import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer, { CART_STORAGE_KEY } from "./slice/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(store.getState().cart.items)
    );
  });
}

export default store;
