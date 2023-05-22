import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageWrap } from "../../components/pagewrapp/style";
import { Image } from "./style";

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

console.log(data)
let price = data.price;
let discount = data.discountedPrice;
let saleIcon;
let saleText;
let tags = [data.tags];
let rating = data.rating;
let stars = [];
function createStars(rating) {
    for(let i = 0; i < rating; i++) {
        stars.push(<i className="fa-solid fa-star"></i>)
    }
};
createStars(rating);
console.log(rating)
if (price > discount) {
    price = discount;
    console.log("DISCOUNT: " + discount)
    saleIcon = <i className="fa-solid fa-fire"></i>;
    saleText = <p>{saleIcon} On sale! Ordinary price: {data.price}</p>
}
    return(
        <PageWrap>
            <h1>{data.title}</h1>
            <div>
                <p>$ {price}</p>
            </div>
            <p>{data.description}</p>
            <p>Rating:</p>
            <div aria-label={"Product rating: " + rating + " stars"}>
            {...stars}
            {saleText}
            <p>Tags: {...tags}</p>
            </div>
            <Image src={data.imageUrl}/>
        </PageWrap>
    )
}