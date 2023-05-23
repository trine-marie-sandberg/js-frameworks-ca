import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageWrap } from "../../components/pagewrapp/style";
import { Image, ProductWrap, Button, Icon, EmphasizeText, MarginWrap, StarWrap } from "./style";
import HandleClick from "./handleclick";

export default function ProductPage() {

    const [data, setData] = useState([]);
    let params = useParams();
    const id = params.id;
    const endpoint = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  
    async function getData() {
      const response = await fetch(endpoint);
      setData(await response.json());
    }
    useEffect(() => {
      getData();
    }, []);

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
    };
    createStars(rating);

    if (price > discount) {
        price = discount;
        saleIcon = <i className="fa-solid fa-fire"></i>;
        saleText = <p>{saleIcon} On sale! Ordinary price: {data.price}</p>
    }
    const navigate = useNavigate();
    let addToCart = false;
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
                  <MarginWrap>
                    <Button onClick={HandleClick(addToCart)}>Add to cart + <Icon className="fa-solid fa-cart-shopping"></Icon></Button>
                  </MarginWrap>
                  <div>{addToCart === true ? <p>true</p>: ""}</div>
                </MarginWrap>
                <MarginWrap>
                    <Image src={data.imageUrl} alt={data.title}/>
                    <p>Tags: {...tags}</p>
                </MarginWrap>
            </ProductWrap>
        </PageWrap>
    )
}