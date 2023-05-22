import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 300px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;