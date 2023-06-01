import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import * as storage from "../../hooks/storage";

export default function Cart() {
    const cartItems = {...localStorage};
    
    let cartArray = [];
    let objectKeys = Object.keys(cartItems);

    for(let i = 0; i < objectKeys.length; i++) {
        cartArray.push(storage.load(objectKeys[i]));
    }
    console.log(cartArray)
    //console.log(cartItems)
    return(
        <PageWrap>
            <h1>CART</h1>
        </PageWrap>
    )
}