import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, InputWrap } from './style';

export default function ContactForm() {

    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Success!")
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
        <InputWrap>
            <Label htmlFor="fullName">Full Name:</Label>
            <Input
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                minLength={3}
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="subject">Subject:</Label>
            <Input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                minLength={3}
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="email">Email:</Label>
            <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
        </InputWrap>
        <InputWrap>
            <Label htmlFor="body">Body:</Label>
            <TextArea
                id="body"
                value={body}
                onChange={handleBodyChange}
                minLength={3}
                required
            ></TextArea>
        </InputWrap>
        <Button type="submit">Submit</Button>
    </FormContainer>
    )
}
