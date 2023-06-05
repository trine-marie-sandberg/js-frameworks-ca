import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import ContactForm from "../../components/contactform";
import { Padding } from "./style";

export default function ContactPage() {
    
    return(
        <PageWrap>
            <Padding>
                <h2>Contact form</h2>
                <p>Please use this form to contact uss</p>
            </Padding>
            <ContactForm></ContactForm>
        </PageWrap>
    )
}