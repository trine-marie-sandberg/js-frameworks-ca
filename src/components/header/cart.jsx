import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { I, CartWrapper, CartItemsIndikator } from "./style";

export function CartIcon() {
    const cartItems = {...localStorage};
    let objectKeys = Object.keys(cartItems);
    let itemsInCart = objectKeys.length;

    const [storageState, setStorageState] = useState(0);
    const [itemsCount, setItemsCount] = useState(itemsInCart);

    window.addEventListener("storage", () => {
        //Should re-render when changes to localstorage is made
        let newStorageState = storageState + 1;
        setStorageState(newStorageState);
    })

    useEffect(() => {
        setItemsCount(itemsInCart);
    }, [storageState])

    return(
        <NavLink to="cart" aria-label="Cart">
            <CartWrapper>
                <I className="fa-solid fa-cart-shopping"></I>
                <CartItemsIndikator>+{itemsCount}</CartItemsIndikator>
            </CartWrapper>
        </NavLink>
    )
}