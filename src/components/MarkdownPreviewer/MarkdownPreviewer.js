import React, { useEffect, useState } from "react";
import marked from "marked";
import { Wrapper, InnerWrapper, Tools, Controls } from "../MarkdownEditor";
import { WindowTitle } from "../WindowTitle";
import { ResizeBtn } from "../ResizeBtn";
import { ZoomBtn } from "../ZoomBtn";
import { SiteBanner } from "../SiteBanner";
import { Editor } from "../Editor";

const renderer = new marked.Renderer();

export const MarkdownPreviewer = () => {
  const [windowMax, setWindowMax] = useState({
    editorWindow: null,
    previewWindow: null
  });
  const [windowZoom, setWindowZoom] = useState({
    editorZoom: null,
    previewZoom: null
  });

  const [userInput, setUserInput] = useState("");
  const [
    markDown = marked("# Heading\n## Subheading\nhello"),
    setMarkDown
  ] = useState();

  // const maximizeWindow = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.id);
  //   e.target.id === "editorSize"
  //     ? !windowMax.editorWindow
  //       ? setWindowMax({ editorWindow: true })
  //       : setWindowMax({ editorWindow: false })
  //     : !windowMax.previewWindow
  //     ? setWindowMax({ previewWindow: true })
  //     : setWindowMax({ previewWindow: false });
  // };

  const resizeEditorWindow = () => {
    !windowMax.editorWindow
      ? setWindowMax({ editorWindow: true })
      : setWindowMax({ editorWindow: false });
  };

  const zoomEditorWindow = () => {
    !windowZoom.editorZoom
      ? setWindowZoom({ editorZoom: true })
      : setWindowZoom({ editorZoom: false });
  };

  const resizePreviewWindow = () => {
    !windowMax.previewWindow
      ? setWindowMax({ previewWindow: true })
      : setWindowMax({ previewWindow: false });
  };

  const handleChange = (e) => setUserInput(e.target.value);
  const handleClick = () =>
    setMarkDown(marked(userInput, { renderer: renderer }));
  const resetPreviewer = () => setMarkDown("");

  return (
    <>
      <Wrapper>
        <SiteBanner title="Markdown Previewer Mini" />

        <InnerWrapper
          position="editorWrapper"
          full={!windowMax.editorWindow ? false : true}
        >
          <Tools position="tools">
            <WindowTitle title="Markdown editor" />
            <ZoomBtn size="40px" id="zmBtn" onClick={zoomEditorWindow} />
            <ResizeBtn
              size="40px"
              onClick={resizeEditorWindow}
              id="editorSize"
            />
          </Tools>

          <Editor
            as="textarea"
            position="editor"
            id="text"
            onChange={handleChange}
            zoom={!windowZoom.editorZoom ? false : true}
          />
          <Controls />
        </InnerWrapper>
      </Wrapper>

      <div
        id="preview"
        style={
          windowMax.previewWindow
            ? {
                border: "1px solid #111",
                margin: "0 auto 32px",
                minHeight: "120px",
                width: "80%",
                minWidth: "80%",
                height: "80%",
                minHeight: "400px"
              }
            : {
                border: "1px solid #111",
                margin: "0 auto 32px",
                minHeight: "120px",
                width: "min-content",
                minWidth: "min-content",
                minHeight: "min-content"
              }
        }
        dangerouslySetInnerHTML={{ __html: markDown }}
      />
      <button type="submit" onClick={handleClick}>
        Create markdown
      </button>
      <button type="reset" onClick={resetPreviewer}>
        Reset
      </button>
    </>
  );
};
