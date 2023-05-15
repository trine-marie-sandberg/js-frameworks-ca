import { styled } from "styled-components";

export const Main = styled.main`
all: unset;
display: block;
  color: var(--color-font);
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  display: grid;
  grid-template-rows: 1fr 7fr 1fr
`;