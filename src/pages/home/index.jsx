import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import Cards from "../../components/cards";

export default function Home() {
    return(
        <PageWrap>
          <h1>Welcome to ReCom store </h1>
          <h2><i className="fa-solid fa-magnifying-glass"></i> Search for products:</h2>
          <Cards/>
        </PageWrap>
    )
}