import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import { useParams } from "react-router-dom";

export default function NotFound() {
    console.log(useParams())
    return(
        <PageWrap>
            <h1>404 Page not found</h1>
        </PageWrap>
    )
}