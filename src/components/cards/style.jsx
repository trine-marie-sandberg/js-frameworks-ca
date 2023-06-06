import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: ${(props) => props.theme.sizes.card};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const CardsWrapp = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(250px, 1fr) );
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding:  ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.darker};
`;
export const CardWrap = styled.div`
  border: solid 2px ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.primary};
  margin: ${(props) => props.theme.sizes.xs};
  padding:  ${(props) => props.theme.sizes.sm};
  margin: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
  }
`;
export const SearchBar = styled.input.attrs({ type: 'text' })`
  background-color: white;
  width: 20vw;
  margin: 5px;
  padding: 10px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: none;
  @media (max-width: 1000px) {
    width: 200px;
  }
`;