import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    dataCart: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { id, name, price, imageUrl } = action.payload.product;
            const product = state.dataCart?.find(
                (item) =>
                    item.productId === id && item.size === action.payload.size
            );
            if (product) {
                state.dataCart = state.dataCart.map((item) =>
                    item === product
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
            } else {
                state.dataCart = [
                    ...state.dataCart,
                    {
                        productId: id,
                        size: action.payload.size,
                        name: name,
                        price: price,
                        imageUrl: imageUrl[0],
                        quantity: action.payload.quantity,
                    },
                ];
            }
        },
        emptyCart: (state, action) => {
            state.dataCart = [];
        },

        removeItemFromCart: (state, action) => {
            state.dataCart = state.dataCart.filter(
                (item) => current(item) !== action.payload
            );
        },
        setItemQuantity: (state, action) => {
            if (action.payload.sign === "plus") {
                state.dataCart = state.dataCart.map((item) =>
                    current(item) === action.payload.product
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else if (action.payload.sign === "minus") {
                state.dataCart = state.dataCart.map((item) =>
                    current(item) === action.payload.product &&
                    item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        },
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
});

export const {
    addItemToCart,
    emptyCart,
    getTotalPrice,
    removeItemFromCart,
    setItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
