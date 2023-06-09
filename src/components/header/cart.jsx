import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { I, CartWrapper, CartItemsIndikator } from "./style";
import * as storage from "../../hooks/storage";

export function CartIcon() {
    //FORTSETT FRA I GÅR:
    //https://www.youtube.com/watch?v=IK6KXIkJZqU 
    //https://www.youtube.com/watch?v=jWWW9Wyl0mY
    //https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

    const [storageState, setStorageState] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    const cartItems = {...localStorage};
    let objectKeys = Object.keys(cartItems);
    let itemsInCart = objectKeys.length;

    window.addEventListener("storage", (event) => {
        //Re-render when changes to localstorage is made
        let newStorageState = storageState + 1;
        setStorageState(newStorageState);

        itemsInCart = objectKeys.length;
        console.log(itemsInCart)
        setItemsCount(itemsInCart)
    })

    useEffect(() => {
        setItemsCount(itemsInCart)
        console.log("dependency array working!")
    }, [storageState])
    console.log(itemsInCart)
    return(
        <NavLink to="cart" aria-label="Cart">
            <CartWrapper>
                <I className="fa-solid fa-cart-shopping"></I>
                <CartItemsIndikator>+{itemsCount}</CartItemsIndikator>
            </CartWrapper>
        </NavLink>
    )
}