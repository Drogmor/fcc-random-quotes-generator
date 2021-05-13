import styled from "styled-components";

export const Editor = styled.div`
  background: #f2f2f2;
  box-sizing: border-box;
  border: none;
  grid-area: ${(props) => props.position};
  height: 100%;
  margin: 1em 0;
  resize: none;
  transform: scale(${(props) => (props.zoom ? "2" : "1")});
  transform-origin: top left;
  transition: all 0.1s linear;
  width: 95%;
  min-height: 100%;
  overflow: hidden;
`;
