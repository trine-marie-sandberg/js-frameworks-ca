import styled from "styled-components";

export const Nav =  styled.nav`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Head = styled.header`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
`;
export const Li = styled.li`
  padding: 5px;
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: 5px;
  color: ${(props) => props.theme.color.secondary};
`;
export const Logo = styled.i`
  font-size: ${(props) => props.theme.sizes.xl};
  color: ${(props) => props.theme.color.secondary};
  padding: 5px;
`;
export const LogoText = styled.p`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.secondary};
  display: inline;
`;
export const CartWrapper = styled.div`
  display: flex;
`;
export const CartItemsIndikator = styled.p`
  align-self: center;
  margin: 0 auto;
  color: ${(props) => props.theme.color.font};
`;