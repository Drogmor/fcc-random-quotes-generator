import styled from "styled-components";

const StyledQuote = styled.h1`
  color: #001d3d;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 24px;
  margin: 0.2em;
  grid-area: quote;
`;

const Quote = ({ quote, id }) => {
  return <StyledQuote id={id}>{quote}</StyledQuote>;
};

export default Quote;
