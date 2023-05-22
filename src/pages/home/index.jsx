import React from "react";
import Cards from "../../components/cards/card";
import { CardsWrap } from "../../components/cards/cardwrapper";
import { PageWrap } from "../../components/pagewrapp/style";

export default function Home() {
    return(
        <PageWrap>
          <h1>HOME</h1>
          <CardsWrap>
            <h2><i className="fa-solid fa-fire"></i> items:</h2>
            <Cards/>
          </CardsWrap>
        </PageWrap>
    )
}