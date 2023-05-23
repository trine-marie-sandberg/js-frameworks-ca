import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 300px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  margin: ${(props) => props.theme.sizes.med};
`;
export const ProductWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.med};
`;
export const Button = styled.button`
  height: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.secondary};
`;
export const Icon = styled.i`
  font-size: ${(props) => props.theme.sizes.sm};
`;
export const SaleText = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: larger;
`;