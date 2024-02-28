import {
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
    SET_QUANTITY,
    GET_TOTAL_PRICE,
} from "../types";

export const addItemToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});

export const emptyCart = () => ({
    type: EMPTY_CART,
});

export const removeItemFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
});

export const setItemQuantity = (payload) => ({
    type: SET_QUANTITY,
    payload,
});

export const getTotalPrice = () => ({
    type: GET_TOTAL_PRICE,
});
