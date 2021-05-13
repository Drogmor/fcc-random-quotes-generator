import styled from "styled-components";

export const StyledTitle = styled.h1`
  align-self: center;
  justify-self: flex-start;
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "600"};
  flex-grow: ${(props) => (props.grow ? "1" : "0")};
  text-align: ${(props) => props.align || "left"};
  user-select: none;
`;
