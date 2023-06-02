import React from "react";
import { Link } from "react-router-dom";
import { Image, CardsWrapp, CardWrap } from "./style";
import apiCall from "../../hooks/api";

export default function Cards() {

  const { data, loading, error } = apiCall("https://api.noroff.dev/api/v1/online-shop");

  try {

    if(loading) {
      return <div>Loading. . . </div>
    }
    if(error) {
      return <div>Error</div>
    }
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