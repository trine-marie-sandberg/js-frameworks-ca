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
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(190px, 1fr) );
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  width: 100%;
  padding:  ${(props) => props.theme.sizes.sm};
  text-decoration: none;
  @media (min-width: 900px) {
    max-width: 600px;
  }
  @media (min-width: 1600px) {
    max-width: 900px;
  }
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
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.darker};
`;
export const FormWrap = styled.div`
  padding: 1rem;
`;