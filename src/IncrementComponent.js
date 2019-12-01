import React, { Component } from 'react';

class IncrementComponent extends Component {
    render() {
        return (
            <div>
              <button id="questionIndex" className="blueButton topicButton" value="vote1" onClick={this.incrementCount}>
                {blueOption} <p>{blueVote}</p>
              </button>
              <button id="questionIndex" className="redButton topicButton" value="vote2" onClick={this.incrementCount}>
                {redOption} <p>{redVote}</p>
              </button> 
            </div>
        );
    }
}
export default IncrementComponent;