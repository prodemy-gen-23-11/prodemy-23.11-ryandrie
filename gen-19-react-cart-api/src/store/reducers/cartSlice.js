import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataCart: [],
    totalPrice: 0,
    isLoading: false,
    isError: false,
};

export const fetchCart = createAsyncThunk("fetchCart", async () => {
    const response = await axios.get("http://localhost:3000/cart/1");
    return response.data.itemList;
});

export const putCart = createAsyncThunk("putCart", async (payload) => {
    await axios.put("http://localhost:3000/cart/1", {
        itemList: payload,
    });

    return payload;
});

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {
        getTotalPrice: (state, action) => {
            let total =
                state.dataCart.length > 0
                    ? state.dataCart.reduce((total, item) => {
                          return (total += item.price * item.quantity);
                      }, 0)
                    : 0;

            state.totalPrice = total;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataCart = action.payload;
        });
        builder.addCase(fetchCart.rejected, (state, action) => {
            state.isError = true;
        });
        builder.addCase(putCart.fulfilled, (state, action) => {
            state.dataCart = action.payload;
        });
    },
});

export const { getTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
