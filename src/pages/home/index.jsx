import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import Cards from "../../components/cards";
import { Heading, Wrapper } from "./style";

export default function Home() {
    return(
        <PageWrap>
          <Wrapper>
            <h1>Welcome to ReCom store </h1>
            <Heading><i className="fa-solid fa-magnifying-glass"></i> Search for products:</Heading>
          </Wrapper>
          <Cards/>
        </PageWrap>
    )
}