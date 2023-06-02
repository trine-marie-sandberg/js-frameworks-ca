import { styled } from "styled-components";

export const Search = styled.input.attrs({ type: 'text' })`
  background-color: white;
  width: 20vw;
  height: 25px;
  margin: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: none;
`;