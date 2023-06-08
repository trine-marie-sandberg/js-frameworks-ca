import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { I, CartWrapper, CartItemsIndikator } from "./style";
import * as storage from "../../hooks/storage";

export function CartIcon() {

    const [storageState, setStorageState] = useState();
    let storageAlert;
    let itemsInCart = 0;
    window.addEventListener("storage", (event) => {
        storageAlert = "Re-render when changes to localstorage is made";
        setStorageState(storageAlert);
    })

    useEffect(() => {
        const cartItems = {...localStorage};
        let objectKeys = Object.keys(cartItems);
        itemsInCart = objectKeys.length;
        console.log(itemsInCart)
    
        console.log("dependency array working!")
    }, [storageState])
    console.log(itemsInCart)
    return(
        <NavLink to="cart" aria-label="Cart">
            <CartWrapper>
                <I className="fa-solid fa-cart-shopping"></I>
                <CartItemsIndikator>{itemsInCart}</CartItemsIndikator>
            </CartWrapper>
        </NavLink>
    )
}