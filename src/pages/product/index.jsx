import React, { useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PageWrap } from "../../components/pagewrapp/style";
import { Image, ProductWrap, Button, Icon, EmphasizeText, MarginWrap, StarWrap, CartBtn, ToCartBtn, ButtonsWrap } from "./style";
import apiCall from "../../hooks/api";
import { productVariables, createStars } from "../../hooks/variables";
import { cartBtns } from "../../hooks/cartfunctions";
import Loader from "../../components/loader";

export default function ProductPage() {
  let params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const { data, loading, error } = apiCall(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  let tags = [data.tags];
  const cv = productVariables(data);
  const starIcons = createStars(cv.rating, cv.stars);
  const cartBtn = cartBtns(id, cv.title, cv.price, cv.imgUrl);

  if(loading) {
    return <PageWrap>
             <Loader/>
           </PageWrap>;
  }
  if(error) {
    return <PageWrap>Error</PageWrap>;
  }
    return(
        <PageWrap>
            <ButtonsWrap>
              <Button onClick={() => navigate(-1)} aria-label="Back button">
                <Icon className="fa-solid fa-arrow-rotate-left"></Icon>
              </Button>
              <Link to={"/cart"}>
                <ToCartBtn>
                  Go to cart <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </ToCartBtn>
              </Link>
            </ButtonsWrap>
            <ProductWrap>
                <MarginWrap>
                  <h1>{cv.title}</h1>
                  <EmphasizeText>
                    <p>$ {cv.price}</p>
                  </EmphasizeText>
                  <p>{cv.description}</p>
                  <EmphasizeText>
                      <p>{cv.saleText}</p>
                      <StarWrap aria-label={"Product rating: " + cv.rating + " stars"}>
                         <MarginWrap>Rating:</MarginWrap>
                         {...starIcons}
                      </StarWrap>
                  </EmphasizeText>
                  {cartBtn.displayCount}
                  <div>
                    <CartBtn onClick={cartBtn.remove}>-</CartBtn>
                    <CartBtn onClick={cartBtn.add}>+</CartBtn>
                    <CartBtn onClick={cartBtn.clear}>Clear</CartBtn>
                  </div>
                </MarginWrap>
                <MarginWrap>
                    <Image src={data.imageUrl} alt={data.title}/>
                    <p>Tags: {...tags}</p>
                </MarginWrap>
            </ProductWrap>
        </PageWrap>
    )
}