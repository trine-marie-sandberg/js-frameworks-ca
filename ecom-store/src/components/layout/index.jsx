import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Main, Wrapper } from "./style";

export default function Layout({children}) {
    return(
        <Wrapper>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
        </Wrapper>
    )
}