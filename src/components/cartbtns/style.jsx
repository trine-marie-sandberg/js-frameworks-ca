import { styled } from "styled-components";

export const Button = styled.button`
  height: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.secondary};
`;
export const Icon = styled.i`
  font-size: ${(props) => props.theme.sizes.sm};
`;