import { styled } from "styled-components";

export const CartWrap = styled.div`
  padding:  ${(props) => props.theme.sizes.sm};
  margin: 5px;
  max-height: 250px;
  cursor: pointer;
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.primary};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
  }
`;
export const CartContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(190px, 1fr) );
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding:  ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.darker};
  text-decoration: none;
`;
export const Icon = styled.i`
  font-size: ${(props) => props.theme.sizes.lg};
  padding: 10px;
`;
export const Image = styled.img`
  height: 100%;
  max-height: 100px;
  width: auto;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const SmallText = styled.h2`
  font-size: ${(props) => props.theme.sizes.sm};
`;
export const Heading = styled.div`
  color: ${(props) => props.theme.color.secondary};
  margin: 0 auto;
`;
//checkoutform
export const FormContainer = styled.form`
  max-width: 1000px;
  padding: 20px;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Label = styled.label`
  color: ${(props) => props.theme.color.secondary};
  padding: 5px;
  margin: 5px;
  border-right: 1px solid ${(props) => props.theme.color.light};
  width: 100px;
`;
export const Input = styled.input`
  padding: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.darker};
  color: ${(props) => props.theme.color.secondary};
  border: none;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Select = styled.select`
  background-color: ${(props) => props.theme.color.darker};
  color: ${(props) => props.theme.color.secondary};
  border: none;
  padding: 10px;
`;
export const TextArea = styled.textarea`
  border: none;
  padding: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.secondary};
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.color.dark};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.secondary};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;
export const Padding = styled.div`
  padding: 16px;
`;