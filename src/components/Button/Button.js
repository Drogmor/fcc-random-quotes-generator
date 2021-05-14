import styled from "styled-components";
import { lighten, darken } from "polished";
export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => lighten(0.04, props.bg || "transparent")};
  color: ${(props) => props.color || "#111"};
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: 600;
  line-height: ${(props) => props.fontSize || "12px"};
  padding: 0.5em;
  transition: 0.2s all linear;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  width: ${(props) => (props.size ? props.size : "80%")};
  height: ${(props) => (props.size ? props.size : "80%")};
  :hover {
    color: ${(props) => lighten(100, props.color || "#111")};
    background-color: ${(props) =>
      darken(0.5, props.bg || `${darken(0.5, "#f2f2f2")}`)};
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
