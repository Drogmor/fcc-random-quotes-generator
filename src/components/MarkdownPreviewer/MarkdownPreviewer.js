import React, { useState } from "react";
import marked from "marked";
import { Wrapper, InnerWrapper, Tools, Controls } from "../MarkdownEditor";
import { WindowTitle } from "../WindowTitle";
import { ResizeBtn } from "../ResizeBtn";
import { ZoomBtn } from "../ZoomBtn";
import { SiteBanner } from "../SiteBanner";
import { Editor } from "../Editor";
import { placeholder } from "../../assets/placeholder";
import { SubmitBtn } from "../SubmitBtn";
import { ResetBtn } from "../ResetBtn";
import { ClearBtn } from "../ClearBtn";

marked.setOptions({ breaks: true });

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}">${text}"</a>"`;

export const MarkdownPreviewer = () => {
  const [windowMax, setWindowMax] = useState({
    editorWindow: false,
    previewWindow: false
  });
  const [windowZoom, setWindowZoom] = useState({
    editorZoom: null,
    previewZoom: null
  });

  const [markDown = placeholder, setMarkDown] = useState();

  const resizeEditorWindow = () => {
    !windowMax.editorWindow
      ? !windowMax.previewWindow
        ? setWindowMax({ editorWindow: true })
        : setWindowMax({ editorWindow: true, previewWindow: false })
      : setWindowMax({ editorWindow: false });
  };

  const zoomEditorWindow = () => {
    !windowZoom.editorZoom
      ? setWindowZoom({ editorZoom: true })
      : setWindowZoom({ editorZoom: false });
  };

  const resizePreviewWindow = () => {
    !windowMax.previewWindow
      ? !windowMax.editorWindow
        ? setWindowMax({ previewWindow: true })
        : setWindowMax({ previewWindow: true, editorWindow: false })
      : setWindowMax({ previewWindow: false });
  };

  const zoomPreviewWindow = () => {
    !windowZoom.previewZoom
      ? setWindowZoom({ previewZoom: true })
      : setWindowZoom({ previewZoom: false });
  };

  const handleChange = (e) => {
    setMarkDown(e.target.value);
  };
  const handleClick = (e) => {
    setMarkDown(e.target.value);
  };
  const handleReset = (e) => {
    document.getElementById("editor").value = placeholder;
    setMarkDown(placeholder);
  };

  const handleClear = () => {
    document.getElementById("editor").value = "";
    setMarkDown("");
  };

  return (
    <>
      <Wrapper>
        <SiteBanner title="Markdown Previewer Mini" />
        <InnerWrapper
          editor
          position="editorWrapper"
          full={!windowMax.editorWindow ? false : true}
        >
          <Tools position="tools">
            <WindowTitle title="Markdown editor" />
            <ZoomBtn
              size="40px"
              id="editorZoomBtn"
              onClick={zoomEditorWindow}
            />
            <ResizeBtn
              size="40px"
              onClick={resizeEditorWindow}
              id="editorSizeBtn"
            />
          </Tools>
          <Editor
            as="textarea"
            position="editor"
            id="editor"
            value={markDown}
            onChange={handleChange}
            zoom={!windowZoom.editorZoom ? false : true}
          />
          <Controls>
            <SubmitBtn
              id="submitBtn"
              size="auto"
              fontSize="16px"
              onClick={handleClick}
            />
            <ResetBtn
              id="resetBtn"
              size="auto"
              fontSize="16px"
              onClick={handleReset}
            />
            <ClearBtn
              id="clearBtn"
              size="auto"
              fontSize="16px"
              onClick={handleClear}
            />
          </Controls>
        </InnerWrapper>
        <InnerWrapper
          position="PreviewWrapper"
          full={!windowMax.previewWindow ? false : true}
        >
          <Tools position="previewtools">
            <WindowTitle title="Markdown previewer" />
            <ZoomBtn
              size="40px"
              id="previewZoomBtn"
              onClick={zoomPreviewWindow}
            />
            <ResizeBtn
              size="40px"
              onClick={resizePreviewWindow}
              id="previewSizeBtn"
            />
          </Tools>
          <Editor
            as="div"
            position="preview"
            id="preview"
            zoom={!windowZoom.previewZoom ? false : true}
            dangerouslySetInnerHTML={{
              __html: marked(markDown, { renderer: renderer })
            }}
          />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};
