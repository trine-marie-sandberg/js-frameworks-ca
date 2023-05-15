import React from "react";
import { NavBar } from "./navbar";
import { Head, I } from "./style";
import { Link } from "react-router-dom";
import "./style.module.css";

export default function Header() {
    return(
        <Head>
            <Link to={"home"}><I className="fa-sharp fa-solid fa-shop"></I></Link>
            <NavBar/>
        </Head>
    )
}