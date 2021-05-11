import styled from "styled-components";

const StyledAuthor = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-style: italic;
  color: #343a40;
  grid-area: author;
`;

const Author = ({ author, id }) => {
  return <StyledAuthor id={id}>{author}</StyledAuthor>;
};

export default Author;
