import React from "react";
import { NavLink } from "react-router-dom";
import { I, CartWrapper, CartItemsIndikator } from "./style";

const itemsInCart = 0;
export function CartIcon() {
    return(
        <NavLink to="cart" aria-label="Cart">
            <CartWrapper>
                <I className="fa-solid fa-cart-shopping"></I>
                <CartItemsIndikator>{itemsInCart}</CartItemsIndikator>
            </CartWrapper>
        </NavLink>
    )
}