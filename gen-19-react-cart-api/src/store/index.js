import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: authSlice,
    },
});

export default store;
