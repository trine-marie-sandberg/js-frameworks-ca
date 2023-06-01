import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import * as storage from "../../hooks/storage";
import { Link } from "react-router-dom";
import { CartWrap, Image } from "./style";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
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
            <div>
                {cartArray.map((data) => {
                    return(
                        <CartWrap key={data.id}>
                            <div  onClick={() => navigate(`/product/${data.id}`)} aria-label="Back button">
                              <h2>{data.title}</h2>
                              <p>{data.price}</p>
                              <Image src={data.imgUrl} alt={data.title}></Image>
                            </div>
                        </CartWrap>
                    )
                })}
            </div>
        </PageWrap>
    )
}