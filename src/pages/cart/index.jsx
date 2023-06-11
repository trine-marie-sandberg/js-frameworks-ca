import React, { useState, useEffect } from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import * as storage from "../../hooks/storage";
import { CartWrap, CartContainer, Image, SmallText, Icon, Heading, FormWrap, FlexWrap, 
         CheckoutWrap, TotalCost, CartBtn, ToCartBtn
       } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { cartBtns } from "../../hooks/cartfunctions";
import CheckoutForm from "../../components/checkoutform";

export default function Cart() {
    const navigate = useNavigate();
    const cartItems = {...localStorage};
    let objectKeys = Object.keys(cartItems);
    let cartArray = [];
    let totalArray = [];
    let getAmount = [];
    let itemPrice = 0;

    for(let i = 0; i < objectKeys.length; i++) {
        cartArray.push(storage.load(objectKeys[i]));
        getAmount.push({
            price: cartArray[i].price,
            amount: cartArray[i].count,
        });
    }

    const [cart, setCart] = useState(cartArray);
    const [total, setTotal] = useState([]);
    const [storageState, setStorageState] = useState(0);

    window.addEventListener("storage", () => {
        setStorageState(storageState + 1);
    })

    useEffect(() => {
        for(let i = 0; i < getAmount.length; i++) {
            let price = getAmount[i].price;
            let amount = getAmount[i].amount;
            const totalPrice = price * amount;
            itemPrice = Math.ceil(totalPrice);
            totalArray.push(itemPrice);
        }
        setTotal(() => totalArray.reduce((partialSum, a) => partialSum + a, 0));
    }, [storageState]);
    
    return(
        <PageWrap>
            <div>
              <Link to={"/"}>
                <ToCartBtn>
                  Go to store <i className="fa-solid fa-store"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </ToCartBtn>
              </Link>
            </div>
            <FlexWrap>
                <CartContainer>
                    <Heading>
                        <h1>My cart</h1>
                        <Icon className="fa-solid fa-cart-shopping"></Icon>
                        <p>Total price ${total}</p>
                    </Heading>
                    {cart.map((data) => {
                        const cartBtn = cartBtns(data.id, data.title, data.price, data.imgUrl);
                        return(
                            <CartWrap key={data.id}>
                                <CartBtn onClick={cartBtn.add}>+</CartBtn>
                                <CartBtn onClick={cartBtn.remove}>-</CartBtn>
                                <CartBtn onClick={cartBtn.clear}>Clear</CartBtn> 
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
                <FormWrap>
                    <CheckoutWrap>
                        <h2>Checkout</h2>
                        <TotalCost>Total cost: ${total}</TotalCost>
                    </CheckoutWrap>
                    <CheckoutForm/>
                </FormWrap>
            </FlexWrap>
        </PageWrap>
    )
}