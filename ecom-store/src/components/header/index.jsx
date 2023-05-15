import React from "react";
import { NavBar } from "./navbar";
import { Head, Logo, LogoText } from "./style";
import { NavLink } from "react-router-dom";
import "./style.module.css";

export default function Header() {
    return(
        <Head>
            <NavLink to={"home"}>
                <Logo className="fa-brands fa-react"></Logo>
                <LogoText>ReCom</LogoText>
            </NavLink>
            <NavBar/>
        </Head>
    )
}