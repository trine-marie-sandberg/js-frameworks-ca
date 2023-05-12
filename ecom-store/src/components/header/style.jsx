import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.color.primary}}
`;
export const Nav =  styled.nav`
  color: ${(props) => {props.theme.color.font}};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
`;
export const I = styled.i`
  font-size: 2.5rem;
  padding: 5px;
`;
export const Li = styled.li`
  padding: 5px;
`;