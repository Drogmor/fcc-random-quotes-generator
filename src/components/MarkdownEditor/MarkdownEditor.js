import styled from "styled-components";
import { lighten, darken } from "polished";

export const Wrapper = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: minmax(20px, 60px) 1fr minmax(20px, 60px) 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". banner ."
    ". editorWrapper ."
    ". . ."
    ". PreviewWrapper .";
  height: 100vh;
  align-items: stretch;
  justify-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

export const InnerWrapper = styled(Wrapper)`
  border-radius: 50px;
  background: transparent;
  box-shadow: 20px 20px 60px #cecece, -20px -20px 60px #ffffff;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(20px, 60px) 1fr minmax(20px, 60px);
  gap: 0px 0px;
  grid-template-areas:
    "tools"
    "editor"
    "controls";
  grid-area: ${(props) => props.position};
  width: ${(props) => (props.full ? "100%" : "60%")};
  height: ${(props) => (props.full ? "100%" : "60%")};
  overflow: hidden;
  transition: 0.2s all linear;
`;

export const Tools = styled.div`
  background: #f2f2f2;
  align-self: center;
  justify-self: stretch;
  display: flex;
  border-radius: 50px 50px 0 0;
  grid-area: ${(props) => props.position};
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid ${darken(0.1, "#f2f2f2")};
  padding: 1.2em 2em 0.2em;
  margin-bottom: 0.8em;
`;

export const Controls = styled(Tools)`
  border: none;
  border-radius: 0 0 50px 50px;
  margin-top: 0.8em;
`;
