import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";
import { ContactLink, I, LinkWrap, Padding } from "./style";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {

    const navigate = useNavigate();
    return(
        <PageWrap>
            <Padding>
                <h1>Checkout was successful</h1>
                <p>Thank you for for chosing ReCom! 
                    You will resive a comfirmation email shortly.
                </p>
                <p>
                    If you have any questions, please use our contact form.
                    We thank you for your purchase and hope to se you again soon.
                </p>
            </Padding>
            <LinkWrap>
                <ContactLink onClick={() => {navigate('/contact')}}>
                    <I className="fa-solid fa-phone"></I>
                    <p>Contact form</p>
                </ContactLink>
                <ContactLink onClick={() => {navigate('/')}}>
                    <I className="fa-solid fa-house"></I>
                    <p>Continue Shopping</p>
                </ContactLink>
            </LinkWrap>
        </PageWrap>
    )
}