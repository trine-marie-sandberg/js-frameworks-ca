import { styled } from "styled-components";

export const PageWrap = styled.div`
  margin: ${(props) => props.theme.sizes.xs} auto;
  background-color: ${(props) => props.theme.color.dark};
  padding: 16px 10vw;
  border: 1px solid ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  @media (max-width: 500px) {
   padding : 16px 0;
  }
`;