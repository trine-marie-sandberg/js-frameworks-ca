import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Select, InputWrap, Label, Input, Button, FlexWrap } from "./style";

export default function CheckoutForm() {

    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    }
    const handleCvcChange = (e) => {
        setCvc(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/checkout');
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FlexWrap>
                <label htmlFor="method">Payment methods:</label>
                <Select id="method">
                    <option>Visa</option>
                    <option>Mastercard</option>
                </Select>
            </FlexWrap>
            <InputWrap>
                <Label htmlFor="fullName">Full Name:</Label>
                <Input 
                    id="fullname" 
                    type="text"
                    value={fullName}
                    onChange={handleFullNameChange}
                    required
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor="address">Customer Address:</Label>
                <Input 
                    id="address" 
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    required
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor="email">Email:</Label>
                <Input 
                    id="email" 
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor="cardnumber">Card Number:</Label>
                <Input 
                    id="cardnumber" 
                    type="number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor="cvc">CVC:</Label>
                <Input 
                    id="cvc" 
                    type="number"
                    value={cvc}
                    onChange={handleCvcChange}
                    maxLength={4}
                    required
                />
            </InputWrap>
            <Button type="submit">Submit</Button>
        </FormContainer>
    )
}
