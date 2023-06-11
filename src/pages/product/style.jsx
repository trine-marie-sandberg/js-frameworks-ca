import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: 49vh;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const MarginWrap = styled.div`
  margin: ${(props) => props.theme.sizes.sm};
`;
export const ProductWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.med};
`;
export const Button = styled.button`
  height: fit-content;
  padding: 10px 20px;
  margin: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.secondary};
`;
export const Icon = styled.i`
  font-size: ${(props) => props.theme.sizes.sm};
`;
export const StarWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const EmphasizeText = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: larger;
`;
export const CartBtn = styled.button`
  background-color: ${(props) => props.theme.color.darker};
  color: ${(props) => props.theme.color.font};
  border: 1px solid ${(props) => props.theme.color.font};
  padding: 5px 8px;
  margin: 3px;
  cursor: pointer;
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
export const ButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ReviewsWrap = styled.div`
  padding: 16px;
`;
export const ReviewWrap = styled.div`
  margin: 5px;
  padding: 16px;
  background-color: ${(props) => props.theme.color.darker};
  border: 1px solid ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;