import React, { Component } from 'react';
import jump from "jump.js";

class Header extends Component {
  

    scrollToQuestion = (e) => {
      e.preventDefault()
      jump(".question", {
        duration: 1000,
        offset: -20,
        callback: undefined,
        a11y: false
      });
    }
    render() {
      
        return (
          <div className="headerContent">
            <h1>Choice</h1>
            <p>
              Choose one of the two options that you prefer more and see how many others voted
              with or against you!
            </p>
            <a onClick={this.scrollToQuestion} href="#questionSection" className="playBtn">
              play
            </a>
          </div>
        );
    }
}
export default Header;