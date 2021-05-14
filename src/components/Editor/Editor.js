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
  min-height: 200px;
  text-align: left;
  overflow-y: hidden;
  overflow-x: hidden;
  img {
    width: 50%;
    height: auto;
  }
  :hover {
    overflow-y: overlay;
  }
  &::-webkit-scrollbar {
    width: 8px;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-track {
    backdrop-filter: blur(2px);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    backdrop-filter: blur(2px);
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
`;
