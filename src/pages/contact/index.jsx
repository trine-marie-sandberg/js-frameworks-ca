import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import ContactForm from "../../components/contactform";

export default function ContactPage() {
    
    return(
        <PageWrap>
            <h2>Contact form</h2>
            <p>Please use this form to contact uss</p>
            <ContactForm></ContactForm>
        </PageWrap>
    )
}