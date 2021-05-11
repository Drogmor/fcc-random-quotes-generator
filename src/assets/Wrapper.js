import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #feeafa;
  display: grid;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "quoteBox quoteBox quoteBox"
    ". quoteButton .";
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  .quoteBox {
    align-self: end;
    padding: 32px;
    border-radius: 5px;
    background: #cbc0d3;
    margin-bottom: 1em;
    grid-area: quoteBox;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "quote quote quote"
      "author author author";
  }
  .buttonGroup {
    grid-area: quoteButton;
    align-self: start;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: stretch;
  }
  /* :nth-child(n) {
    width: 80%;
  } */
`;
