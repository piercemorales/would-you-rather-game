import React, { Component } from 'react';
import jump from "jump.js";

class nextQuestion extends Component {

  nextQuestScroll = e => {
    e.preventDefault();
    jump(900, {
      durtion: 1000,
      offset: 0,
      callback: undefined,
      a11y: false
    });
  };
  render() {
    return (
      <div className="nextQContainer">
        <a onClick={this.nextQuestScroll} className="nextQuestionBtn" href="# ">
          Next Question
        </a>
      </div>
    );
  }
}
export default nextQuestion;