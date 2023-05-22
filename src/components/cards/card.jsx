import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, CardsWrapp, CardWrap } from "./style";

export default function Cards() {

  try {
    const [data, setData] = useState([]);
    const endpoint = "https://api.noroff.dev/api/v1/online-shop";
  
    async function getData() {
      const response = await fetch(endpoint);
      setData(await response.json());
    }
    useEffect(() => {
      getData();
    }, []);
  
  return (
  <CardsWrapp>
    {data.map((data) => {
      return(
      <CardWrap key={data.id}>
          <Link to={`product/${data.id}`}>
              <h2>{data.title}</h2>
              <Image src={data.imageUrl}></Image>
          </Link>
      </CardWrap>
      )
    })}
  </CardsWrapp>
  )
  } catch(error) {console.log(error)}
}