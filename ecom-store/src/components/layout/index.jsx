import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Main } from "./style";

export default function Layout({children}) {
    return(
        <>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
        </>
    )
}