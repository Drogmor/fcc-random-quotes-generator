import styled from "styled-components";
import { lighten, darken } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${(props) =>
    lighten(0.04, props.color || `${lighten(0.04, "#f2f2f2")}`)};
  color: ${(props) => props.color || "#111"};
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: 600;
  line-height: ${(props) => props.fontSize || "12px"};
  transition: 0.2s all linear;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  width: ${(props) => (props.size ? props.size : "80%")};
  height: ${(props) => (props.size ? props.size : "80%")};
  :hover,
  :focus {
    color: ${(props) => lighten(100, props.color || "#111")};
    background-color: ${(props) =>
      darken(0.5, props.color || `${darken(0.5, "#f2f2f2")}`)};
  }
`;

export const ResizeBtn = ({ id, onClick, color, size, fontSize }) => {
  return (
    <Button
      id={id}
      size={size}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
    >
      <FontAwesomeIcon color={color} icon={faExpandAlt} />
    </Button>
  );
};
