import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'



class App extends Component {
  constructor() {
    super();


    // iterate through the array and select a random object
    // go through object and grab items and display them in separate 
    this.state = {
      questionArray: [],
      userNameArray:[],
    }
  }

  componentDidMount() {
    //connecting app to firebase
    const dbRef = firebase.database().ref();

    dbRef.on("value", fbData => {
       // const index =
      const firebaseInfo = fbData.val() 
      const questionObject = firebaseInfo.questionObject


      const questionContent = Object.values(questionObject)

      
      // const topicAnswer = questionTopics[]
      // console.log(topicAnswer);

      // const questions = []
      

      this.setState({
        questionArray: questionContent
      });

    });

  }




  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <h1>wyr</h1>

          {this.state.questionArray.map(value => {
            const blueOption = value.option1;
            const redOption = value.option2;
            const blueVote = value.vote1;
            const redVote = value.vote2;

            // console.log(redVote, blueVote);
            return (
              <div className="buttonContent">
                <button className="blueButton topicButton">
                  {blueOption} <p>{blueVote}</p>
                </button>
                <button className="redButton topicButton">
                  {redOption} <p>{redVote}</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

