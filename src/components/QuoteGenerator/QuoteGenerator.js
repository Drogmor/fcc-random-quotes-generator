import React from "react";
import { Wrapper } from "../../assets/Wrapper";
import Quote from "../../assets/Quote";
import Author from "../../assets/Author";
import QuoteButton from "../../assets/QuoteButton";
import TwitterBtn from "../../assets/TwitterBtn";

class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then((response) => response.json())
      .then((r) => {
        let q = Math.floor(Math.random() * r.data.length);
        // console.log(`${r.data[q].quoteText}`);
        this.setState({
          quote: r.data[q].quoteText,
          author: r.data[q].quoteAuthor
        });
      });
  }
  componentDidMount() {
    this.handleClick();
  }

  render() {
    return (
      <Wrapper id="quote-box">
        <div className="quoteBox">
          <Quote id="text" quote={this.state.quote} />
          <Author id="author" author={this.state.author} />
        </div>
        <div className="buttonGroup">
          <TwitterBtn quote={this.state.quote} author={this.state.author} />
          <QuoteButton id="new-quote" onClick={this.handleClick}>
            New Quote
          </QuoteButton>
        </div>
      </Wrapper>
    );
  }
}

export default QuoteGenerator;
