import React, { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageWrap } from "../../components/pagewrapp/style";
import { Image, ProductWrap, Button, Icon, EmphasizeText, MarginWrap, StarWrap } from "./style";
import apiCall from "../../hooks/api";
import { productVariables, createStars } from "../../hooks/variables";
import { cartBtns } from "../../hooks/cartfunctions";

export default function ProductPage() {
  let params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const { data, loading, error } = apiCall(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  let tags = [data.tags];
  const cv = productVariables(data);
  const starIcons = createStars(cv.rating, cv.stars);
  const cartBtn = cartBtns(id, cv.title, cv.price, cv.imageUrl);

  if(loading) {
    return <PageWrap>Loading. . . </PageWrap>;
  }
  if(error) {
    return <PageWrap>Error</PageWrap>;
  }
    return(
        <PageWrap>
            <Button onClick={() => navigate(-1)} aria-label="Back button">
              <Icon className="fa-solid fa-arrow-rotate-left"></Icon>
            </Button>
            <ProductWrap>
                <MarginWrap>
                  <h1>{cv.title}</h1>
                  <EmphasizeText>
                    <p>$ {cv.price}</p>
                  </EmphasizeText>
                  <p>{cv.description}</p>
                  <EmphasizeText>
                      {cv.saleText}
                      <StarWrap aria-label={"Product rating: " + cv.rating + " stars"}>
                         <MarginWrap>Rating:</MarginWrap>
                         {...starIcons}
                      </StarWrap>
                  </EmphasizeText>
                  <Button onClick={cartBtn.add}>
                      Add to cart + 
                      <Icon className="fa-solid fa-cart-shopping"></Icon>
                  </Button>
                  {cartBtn.displayCount}
                  <button onClick={cartBtn.remove}>-</button>
                  <button onClick={cartBtn.add}>+</button>
                  <button onClick={cartBtn.clear}>Remove</button>
                </MarginWrap>
                <MarginWrap>
                    <Image src={data.imageUrl} alt={data.title}/>
                    <p>Tags: {...tags}</p>
                </MarginWrap>
            </ProductWrap>
        </PageWrap>
    )
}