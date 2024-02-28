import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // const fetcher = (url) =>
    //     axios.get(url).then((res) => {
    //         return res.data.itemList;
    //     });

    // const {
    //     data: cart,
    //     isLoading,
    //     mutate,
    // } = useSWR(`http://localhost:3000/cart/1`, fetcher);

    // async function updateData(newCart) {
    //     axios
    //         .put("http://localhost:3000/cart/1", { itemList: newCart })
    //         .then(() => mutate())
    //         .catch((err) => console.log(err));
    // }

    function addItemToCart(newProduct, size, quantity) {
        const { id, name, price, imageUrl } = newProduct;
        const product = cart?.find(
            (item) => item.productId === id && item.size === size
        );
        let newCart = [];
        if (product) {
            newCart = cart.map((item) =>
                item === product
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(newCart);
        } else {
            newCart = [
                ...cart,
                {
                    productId: id,
                    size: size,
                    name: name,
                    price: price,
                    imageUrl: imageUrl[0],
                    quantity: quantity,
                },
            ];
            setCart(newCart);
        }
        // updateData(newCart);
    }

    function setItemQuantity(product, sign) {
        let newCart = [];
        if (sign === "plus") {
            newCart = cart.map((item) =>
                item === product
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(newCart);
        } else if (sign === "minus") {
            newCart = cart.map((item) =>
                item === product && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            setCart(newCart);
        }

        // updateData(newCart);
    }

    function removeItemFromCart(product) {
        let newCart = cart.filter((item) => item !== product);
        setCart(newCart);
        // updateData(newCart);
    }

    function emptyCart() {
        setCart([]);
        // updateData([]);
    }

    function getTotalPrice() {
        return cart.length > 0
            ? cart.reduce((total, item) => {
                  return (total += item.price * item.quantity);
              }, 0)
            : 0;
    }

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <CartContext.Provider
            value={{
                addItemToCart,
                cart,
                setItemQuantity,
                removeItemFromCart,
                emptyCart,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
