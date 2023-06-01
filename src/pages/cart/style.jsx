import { styled } from "styled-components";

export const CartWrap = styled.div`
  padding:  ${(props) => props.theme.sizes.sm};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.secondary};
  width: 10vw;
`;
export const Icon = styled.i`
  font-size: ${(props) => props.theme.sizes.sm};
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;