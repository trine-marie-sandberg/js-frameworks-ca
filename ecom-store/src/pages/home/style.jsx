import React from "react";
import { styled } from "styled-components";

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: ${(props) => props.theme.sizes.card};
`;