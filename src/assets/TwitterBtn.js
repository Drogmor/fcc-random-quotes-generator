import styled from "styled-components";

const SocialShare = styled.a.attrs((props) => ({
  target: "_top",
  rel: "noopener noreferrer"
}))`
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
  span {
    font-size: 32px;
    color: white;
  }
`;
const TwitterBtn = (props) => {
  let baseUrl = new URL("https://twitter.com/intent/tweet/");
  // let params = `text=${props.quote}--${props.author}`
  // console.log(params)
  baseUrl.searchParams.append("text", `${props.quote}--${props.author}`);
  console.log(baseUrl.toString());
  return (
    <SocialShare id="tweet-quote" href={baseUrl}>
      <span className="fab fa-twitter-square"></span>
    </SocialShare>
  );
};

export default TwitterBtn;
