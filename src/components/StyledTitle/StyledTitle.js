import styled from "styled-components";

export const StyledTitle = styled.h1`
  align-self: center;
  justify-self: flex-start;
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "600"};
`;
