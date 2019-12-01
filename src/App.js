import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'



class App extends Component {
  constructor() {
    super();

    this.state = {
      questionArray: [],
      userNameArray:[],
      voteIncrement: 0,
      currentQuestion: [],
    }
    
  }


  //current question that goes through the firebase database and grab the value of vote for the question and increment using event.target.value



  //increment button counter function
  incrementCount = (e) => {
    console.log('click');
    const dbRef = firebase.database().ref();
    console.log(e.target.index);
    // dbRef.on("value", voteData => {
    //   // console.log(voteData.child('questionObject').Object();
    // })
    // dbRef.on('')
    console.log(dbRef.child('questionObject').child('question1').update({vote1: this.state.voteIncrement}));
    // questionObject/question1/vote1

    
    this.setState({
      voteIncrement: this.state.voteIncrement + 1
    })
  }



  componentDidMount() {
    //connecting app to firebase
    const dbRef = firebase.database().ref();
    //storing firebase into variable for use
    dbRef.on("value", fbData => {
      console.log(fbData.val())
      const firebaseInfo = fbData.val() 
      const questionObject = firebaseInfo.questionObject
      //grabbing original question object from firebase and storing into a variable 
      const questionContent = Object.values(questionObject)
      
      //converting the object into an array and storing into state
      this.setState({
        questionArray: questionContent,
      });
    });
    
  }

  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <h1>wyr</h1>
          
          {
            //mapping through the array to get required values
            this.state.questionArray.map((value) => {
            const blueOption = value.option1;
            const redOption = value.option2;
            const blueVote = value.vote1;
            const redVote = value.vote2;
            return (
              // topic vote buttons
              <div className="buttonContent">
                <button id="questionIndex" className="blueButton topicButton" value="vote1" onClick={this.incrementCount}>
                  {blueOption} <p>{blueVote}</p>
                </button>
                <button id="questionIndex2" className="redButton topicButton" value="vote2"onClick={this.incrementCount}>
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



