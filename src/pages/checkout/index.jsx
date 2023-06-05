import React from "react";
import { PageWrap } from "../../components/pagewrapp/style";

export default function CheckoutPage() {

    return(
        <PageWrap>
            <h1>Checkout was successful</h1>
            <p>Thank you for for chosing ReCom! 
                You will resive a comfirmation email shortly.
            </p>
            <p>If you have any questions, pleace use our contact form</p>
            <div>
            <i className="fa-solid fa-user-tie-hair-long"></i>
            <i className="fa-solid fa-phone"></i>
            </div>
        </PageWrap>
    )
}