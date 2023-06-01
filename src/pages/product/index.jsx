import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../hooks/api";
import { PageWrap } from "../../components/pagewrapp/style";
import { Image, ProductWrap, Button, Icon, EmphasizeText, MarginWrap, StarWrap } from "./style";
import CartBtn from "../../components/cartbtn";
import cartReducer from "../../hooks/cartreducer";

import { useReducer } from 'react';
import * as storage from "../../hooks/storage";
export default function ProductPage() {
  
  let params = useParams();
  const id = params.id;
  const { data, loading, error } = apiCall(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  let price = data.price;
  let discount = data.discountedPrice;
  let saleIcon;
  let saleText;
  let tags = [data.tags];
  let rating = data.rating;
  let stars = [];

  function createStars(rating) {
    for(let i = 0; i < rating; i++) {
        stars.push(<i className="fa-solid fa-star"></i>);
    }
    if(rating === 0) {
        stars.push(<p>Not rated yet <i className="fa-regular fa-star"></i></p>);
    }
  }
createStars(rating);

if (price > discount) {
    price = discount;
    saleIcon = <i className="fa-solid fa-fire"></i>;
    saleText = <p>{saleIcon} On sale! Ordinary price: {data.price}</p>;
}
  //TESTAREA
  let cartState = {
      id: id,
      count: 0,
      title: "",
      price: "",
      imgUrl: "",
  }
  
  const [state, setState] = useReducer(cartReducer, cartState);
  let updateCartState = {
      id: id,
      count: state.count,
      title: data.title,
      price: price,
      imgUrl: data.imageUrl,
  }
  if (state.count > 0) {
      storage.save(id, updateCartState);
  }
  
  function cartAdd() { 
      setState({ type: 'increment' });

  }
  function cartRemove() {
      setState({ type: 'decrement' });
      if(state.count <= 1) {
          //NB: 1 works as 0 for some reason
          storage.remove(id);
      }
  }
  function cartClear() {
      setState({ type: 'reset' });
      storage.remove(id);
  }
  
  let currentCount;
  if(storage.load(id)) {
      let getCurrentCount = storage.load(id)
      currentCount = getCurrentCount.count;
  } else {
      currentCount = 0;
  }
  //TESTAREA ENDS
    // let params = useParams();
    // const id = params.id;

    const navigate = useNavigate();

    if(loading) {
      return <PageWrap>Loading. . . </PageWrap>
    }
    if(error) {
      return <PageWrap>Error</PageWrap>
    }

    return(
        <PageWrap>
            <Button onClick={() => navigate(-1)} aria-label="Back button">
              <Icon className="fa-solid fa-arrow-rotate-left"></Icon>
            </Button>
            <ProductWrap>
                <MarginWrap>
                  <h1>{data.title}</h1>
                  <EmphasizeText>
                    <p>$ {price}</p>
                  </EmphasizeText>
                  <p>{data.description}</p>
                  <EmphasizeText>
                      {saleText}
                      <StarWrap aria-label={"Product rating: " + rating + " stars"}>
                         <MarginWrap>Rating:</MarginWrap>
                         {...stars}
                      </StarWrap>
                  </EmphasizeText>
                  <Button onClick={cartAdd}>
                      Add to cart + 
                      <Icon className="fa-solid fa-cart-shopping"></Icon>
                  </Button>
                  <p>Currently {currentCount} in cart <Icon className="fa-solid fa-cart-shopping"></Icon></p>
                  <button onClick={cartRemove}>-</button>
                  <button onClick={cartAdd}>+</button>
                  <button onClick={cartClear}>Remove</button>
                </MarginWrap>
                <MarginWrap>
                    <Image src={data.imageUrl} alt={data.title}/>
                    <p>Tags: {...tags}</p>
                </MarginWrap>
            </ProductWrap>
        </PageWrap>
    )
}