import React, { Component } from 'react';


class Header extends Component {
  
    render() {
      
        return (
          <div className="headerContent">
            <h1>Choice</h1>
            <p>
              Choose one of two options you prefer and see how many others voted
              with or against you!
            </p>
            <a href="#questionSection" className="playBtn">
              play
            </a>
          </div>
        );
    }
}
export default Header;