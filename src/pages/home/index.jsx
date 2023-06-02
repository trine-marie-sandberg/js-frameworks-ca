import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import Cards from "../../components/cards";

export default function Home() {
    return(
        <PageWrap>
          <h1>HOME</h1>
          <h2><i className="fa-solid fa-fire"></i> items:</h2>
          <Cards/>
        </PageWrap>
    )
}