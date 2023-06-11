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
export const CheckoutWrap = styled.div`
margin: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const TotalCost = styled.p`
  padding: 5px;
`;
export const CartBtn = styled.button`
  background-color: ${(props) => props.theme.color.darker};
  color: ${(props) => props.theme.color.font};
  border: 1px solid ${(props) => props.theme.color.light};
  padding: 5px 8px;
  margin: 3px;
  cursor: pointer;
`;
export const StoreBtn = styled.div`
  background-color: ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.font};
  padding: 10px 20px;
  margin: 1rem;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: fit-content;
`;
export const ToCartBtn = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 10px 20px;
  margin: 16px 0px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.secondary};
  & a {
    color: ${(props) => props.theme.color.secondary};
  }
`;