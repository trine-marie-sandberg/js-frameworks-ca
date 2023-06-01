import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import * as storage from "../../hooks/storage";
import { Link } from "react-router-dom";
import { CartWrap, CartContainer, Image, SmallText, Icon, Heading } from "./style";
import { useNavigate } from "react-router-dom";
import { cartBtns } from "../../hooks/cartfunctions";

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
            <div>
                <CartContainer>
                    <Heading>
                        <h1>My cart</h1>
                        <Icon className="fa-solid fa-cart-shopping"></Icon>
                    </Heading>
                    {cartArray.map((data) => {
                        const cartBtn = cartBtns(data.id, data.title, data.price, data.imgUrl);
                        return(
                            <CartWrap key={data.id}>
                                <button onClick={cartBtn.add}>+</button>
                                <button onClick={cartBtn.remove}>-</button>
                                <button onClick={cartBtn.clear}>Remove</button> 
                                {cartBtn.displayCount}
                                <div  onClick={() => navigate(`/product/${data.id}`)} aria-label="Back button">
                                <SmallText>{data.title}</SmallText>
                                <p>${data.price}</p>
                                <Image src={data.imgUrl} alt={data.title}></Image>
                                </div>
                            </CartWrap>
                        )
                    })}
                </CartContainer>
                <h2>Checkout</h2>
                <h3>Payment</h3>
            </div>
        </PageWrap>
    )
}