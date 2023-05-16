import React from "react";
import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: ${(props) => props.theme.sizes.card};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const CardsWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: ${(props) => props.theme.sizes.med};
`;
export const CardWrap = styled.div`
  background-color: ${(props) => props.theme.color.light};
  border: solid 2px ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${(props) => props.theme.sizes.sm};
  margin: ${(props) => props.theme.sizes.xs};
`;