import styled from "styled-components";

const QuoteButton = styled.button`
  padding: 0.5em 1.45em;
  margin: 0.1em;
  border: 0.15em solid #dee2ff;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #8e9aaf;
  background-color: #dee2ff;
  text-align: center;
  transition: 0.3s all linear;
  :hover {
    border-color: #defffb;
    background: #defffb;
  }
`;

export default QuoteButton;
