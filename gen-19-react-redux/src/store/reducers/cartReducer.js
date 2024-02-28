import {
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
    SET_QUANTITY,
    GET_TOTAL_PRICE,
} from "../types";

const initialState = {
    dataCart: [],
    totalPrice: 0,
};
let newCart = [];
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            newCart = [];
            const { id, name, price, imageUrl } = action.payload.product;
            const product = state.dataCart?.find(
                (item) =>
                    item.productId === id && item.size === action.payload.size
            );
            if (product) {
                newCart = state.dataCart.map((item) =>
                    item === product
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
                return { ...state, dataCart: newCart };
            } else {
                newCart = [
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
                return { ...state, dataCart: newCart };
            }

        case EMPTY_CART:
            return { ...state, dataCart: [] };

        case REMOVE_FROM_CART:
            newCart = state.dataCart.filter((item) => item !== action.payload);
            return { ...state, dataCart: newCart };

        case SET_QUANTITY:
            newCart = [];
            if (action.payload.sign === "plus") {
                newCart = state.dataCart.map((item) =>
                    item === action.payload.product
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else if (action.payload.sign === "minus") {
                newCart = state.dataCart.map((item) =>
                    item === action.payload.product && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }

            return { ...state, dataCart: newCart };

        case GET_TOTAL_PRICE:
            let total =
                state.dataCart.length > 0
                    ? state.dataCart.reduce((total, item) => {
                          return (total += item.price * item.quantity);
                      }, 0)
                    : 0;
            return { ...state, totalPrice: total };
        default:
            return state;
    }
};

export default cartReducer;
