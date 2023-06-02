import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CardsWrapp, CardWrap } from "./style";
import apiCall from "../../hooks/api";
import SearchBar from "../search";

export default function Cards() {

  const { data, loading, error } = apiCall("https://api.noroff.dev/api/v1/online-shop");
  const [cards, setCards] = useState([]);

  const filterCards = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.includes(searchWord);
    })
    setCards(newFilter)
  }
  try {

    if(loading) {
      return <div>Loading. . . </div>
    }
    if(error) {
      return <div>Error</div>
    }
    return (
    <div>
      <SearchBar></SearchBar>
      { data && (
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
      }
    </div>
    )
  } catch(error) {console.log(error)}
}