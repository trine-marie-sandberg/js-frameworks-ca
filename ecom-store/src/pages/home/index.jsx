import React from "react";
import Cards from "./card";
import { CardsWrap } from "./cardwrapper";

export default function Home() {
    return(
        <>
          <h1>HOME</h1>
          <h2><i className="fa-solid fa-fire"></i> items:</h2>
          <CardsWrap>
            <Cards/>
          </CardsWrap>
        </>
    )
}