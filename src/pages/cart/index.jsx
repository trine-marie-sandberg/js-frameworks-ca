import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import * as storage from "../../hooks/storage";

export default function Cart() {
    const cartItems = {...localStorage};
    
    let cartArray = [];
    let objectKeys = Object.keys(cartItems)
    let loadItems = []

    for(let i = 0; i < objectKeys.length; i++) {
        loadItems.push(storage.load(objectKeys[i]))
        cartArray.push(cartItems[i])
        
    }
    console.log(loadItems)
    //console.log(cartItems)
    return(
        <PageWrap>
            <h1>CART</h1>
        </PageWrap>
    )
}