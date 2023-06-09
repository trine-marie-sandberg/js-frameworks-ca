import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { I, CartWrapper, CartItemsIndikator } from "./style";

export function CartIcon() {

    const [storageState, setStorageState] = useState(0);
    const [itemsCount, setItemsCount] = useState([]);

    const cartItems = {...localStorage};
    let objectKeys = Object.keys(cartItems);
    let itemsInCart = objectKeys.length;

    window.addEventListener("storage", () => {
        //Re-render when changes to localstorage is made
        let newStorageState = storageState + 1;
        setStorageState(newStorageState);

        itemsInCart = objectKeys.length;
        //console.log(`Count inside eventlistener: ${itemsInCart}`)
    })

    useEffect(() => {
        setItemsCount(itemsInCart);
    }, [storageState])

    //console.log(`final count: ${itemsInCart}`)
    return(
        <NavLink to="cart" aria-label="Cart">
            <CartWrapper>
                <I className="fa-solid fa-cart-shopping"></I>
                <CartItemsIndikator>+{itemsCount}</CartItemsIndikator>
            </CartWrapper>
        </NavLink>
    )
}