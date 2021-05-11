import React from "react";

export default class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "# h1 \n"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    return (
      <>
        <h1>Markdown Previewer Mini</h1>
        <textarea
          id="editor"
          onChange={this.handleChange}
          style={{ marginBottom: "32px" }}
          value={this.state.userInput}
        />
        <div
          id="preview"
          style={{
            border: "1px solid #111",
            margin: "0 auto 32px",
            minHeight: "120px",
            width: "200px"
          }}
        >
          {this.state.userInput}
        </div>
        <button type="submit">Create markdown</button>
      </>
    );
  }
}
