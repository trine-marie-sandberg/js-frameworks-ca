import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CardsWrapp, CardWrap, SearchBar } from "./style";
import apiCall from "../../hooks/api";

export default function Cards() {

  const { data, loading, error } = apiCall("https://api.noroff.dev/api/v1/online-shop");
  const [cards, setCards] = useState([]);

  //https://www.youtube.com/watch?v=x7niho285qs
  const filterCards = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    setCards(newFilter);
  }
  try {

    if(loading) {
      return <div>Loading. . . </div>
    }
    if(error) {
      return <div>Error</div>
    }

    if (cards.length > 0) return (
      <div>
        <SearchBar type="text" placeholder="search. ." onChange={filterCards}></SearchBar>
          <CardsWrapp>
            {cards.map((data) => {
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
      </div>
    )
    if  (cards.length === 0) return(
      <div>
      <SearchBar type="text" placeholder="search. ." onChange={filterCards}></SearchBar>
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
    </div>
    )
  } catch(error) {
    console.log(error)
    return <div>Error</div>
  }
}