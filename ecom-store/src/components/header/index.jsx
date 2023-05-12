import React from "react";
import { NavBar } from "./navbar";
import { Head } from "./style";
import { Link } from "react-router-dom";
import "./style.module.css";

export default function Header() {
    return(
        <Head>
            <Link to={"home"}><h2>LOGO</h2></Link>
            <NavBar/>
        </Head>
    )
}