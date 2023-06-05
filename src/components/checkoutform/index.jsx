import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Select, InputWrap, Label, Input, Button } from "./style";

export default function CheckoutForm() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/checkout');
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
        <div>
            <label htmlFor="method">Payment methods</label>
            <Select id="method">
                <option>Visa</option>
                <option>Mastercard</option>
            </Select>
        </div>
        <InputWrap>
            <Label htmlFor="fullName">Full Name:</Label>
            <Input 
                id="fullname" 
                type="text"
                onChange={handleFullNameChange}
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="adress">Cotsomer adress:</Label>
            <Input 
                id="adress" 
                type="text"
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="email">Email:</Label>
            <Input 
                id="email" 
                type="text"
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="cardnumber">Cart number</Label>
            <Input 
                id="cardnumber" 
                type="number"
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="cvc">CVC</Label>
            <Input 
                id="cvc" 
                type="number"
                maxLength={4}
                required
            />
        </InputWrap>
        <Button type="submit">Submit</Button>
    </FormContainer>
    )
}