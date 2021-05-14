import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(20px, 60px) 1fr;
  /* grid-template-columns: 60px 1fr 60px;
  grid-template-rows: minmax(20px, 60px) 1fr minmax(20px, 60px) 1fr; */
  gap: 0px 0px;
  grid-template-areas:
    "banner banner"
    "editorWrapper PreviewWrapper";
  /* grid-template-areas:
    ". banner ."
    ". editorWrapper ."
    ". . ."
    ". PreviewWrapper ."; */
  height: auto;
  min-height: 50vh;
  align-items: stretch;
  justify-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

export const InnerWrapper = styled(Wrapper)`
  border-radius: 5px;
  background: transparent;
  box-shadow: 20px 20px 60px #cecece, -20px -20px 60px #ffffff;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(20px, 80px) 1fr minmax(20px, 60px);
  gap: 0px 0px;
  grid-template-areas: ${(props) =>
    props.editor
      ? `"tools"
    "editor"
    "controls";`
      : `"previewtools"
    "preview"
    "preview";`};
  grid-area: ${(props) => props.position};
  width: ${(props) => (props.full ? "100%" : "70%")};
  height: ${(props) => (props.full ? "100%" : "40%")};
  overflow: hidden;
  transition: 0.2s all linear;
`;

export const Tools = styled.div`
  background: #f2f2f2;
  align-self: center;
  justify-self: stretch;
  display: flex;
  border-radius: 5px 5px 0 0;
  grid-area: ${(props) => props.position};
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid ${darken(0.1, "#f2f2f2")};
  padding: 1.2em 2em 0.2em;
  margin-bottom: 0.8em;
`;

export const Controls = styled(Tools)`
  grid-area: controls;
  justify-content: flex-end;
  border: none;
  border-radius: 0 0 5px 5px;
  margin-top: 0.8em;
`;
