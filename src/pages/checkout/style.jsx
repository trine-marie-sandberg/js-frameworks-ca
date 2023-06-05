import { styled } from "styled-components";

export const ContactLink = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.secondary};
  padding: 10px 20px;
  margin: 5px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: 10px;
  color: ${(props) => props.theme.color.secondary};
`;
export const LinkWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;