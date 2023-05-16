import { styled } from "styled-components";

export const PageWrap = styled.div`
  margin: ${(props) => props.theme.sizes.xs} auto;
  background-color: ${(props) => props.theme.color.dark};
  padding: ${(props) => props.theme.sizes.sm};
  border: 1px solid ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;