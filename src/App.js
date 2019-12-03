import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'
import Header from './Header'



class App extends Component {
  constructor() {
    super();
    this.state = {
      questionArray: [],
      userNameArray:[],
      redVoteIncrement: 0,
      blueVoteIncrement: 0,
      currentQuestion: [],
    }
  }


  //increment button counter function
  incrementCountBlue = (e) => {
    e.preventDefault()
    const vote = this.state.currentQuestion[e.currentTarget.id].qName.vote1 + 1;
    const dbRef = firebase.database().ref("questionObject");
    dbRef.child(`${this.state.currentQuestion[e.currentTarget.id].qNumber}`).update({ vote1: vote });

    const newCurrentQuestion = [...this.state.currentQuestion]
    newCurrentQuestion[e.currentTarget.id].voted = true
    this.setState(
      {
        blueVoteIncrement: vote,
        currentQuestion: newCurrentQuestion
      }
    );
  }
// blue ends here
// red starts here

  incrementCountRed = (e) => {
    e.preventDefault()
    const vote = this.state.currentQuestion[e.currentTarget.id].qName.vote2 + 1;
    const dbRef = firebase.database().ref('questionObject');
    
    dbRef.child(`${this.state.currentQuestion[e.currentTarget.id].qNumber}`).update({ vote2: vote});
    const newCurrentQuestion = [...this.state.currentQuestion];
    newCurrentQuestion[e.currentTarget.id].voted = true;
    this.setState({
      redVoteIncrement: vote,
      currentQuestion: newCurrentQuestion
    })
  }



  componentDidMount() {
    //connecting app to firebase
    const dbRef = firebase.database().ref();
    //storing firebase into variable for use
    dbRef.on("value", fbData => {
      const firebaseInfo = fbData.val() 
      const questionObject = firebaseInfo.questionObject
      //grabbing original question object from firebase and storing into a variable 
      const questionContent = Object.values(questionObject)
      const questionNumber = []
      for(let key in questionObject){
        const questionNumbers = {
          qNumber: key,
          qName: questionObject[key],
          voted: false
        }
        questionNumber.push(questionNumbers)
      }
      //converting the object into an array and storing into state
      this.setState({
        questionArray: questionContent,
        currentQuestion: questionNumber
        
      });
      // console.log(this.state.currentQuestion);
    });
    
  }
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <section id="questionSection" className="question">
            <h2>Choose Between...</h2>
            {
              //mapping through the array to get required values
            this.state.questionArray.map((value, index) => {
              const blueOption = value.option1;
              const redOption = value.option2;
              const blueVote = value.vote1;
              const redVote = value.vote2;
              const currentQ = index;
              const voted = this.state.currentQuestion[index].voted
              return (
                // topic vote buttons
                <form>
                  <button
                    key=""
                    id={currentQ}
                    className="blueButton topicButton"
                    value="vote1"
                    onClick={this.incrementCountBlue}
                    disabled={voted ? true : false}
                  >
                    {blueOption}{" "}
                    <p className={`${voted ? "show" : "voteDisplay"}`}>
                      {blueVote} votes
                    </p>
                  </button>

                  <button
                    id={currentQ}
                    className="redButton topicButton"
                    value="vote2"
                    onClick={this.incrementCountRed}
                    disabled={voted ? true : false}
                  >
                    {redOption}{" "}
                    <p className={`${voted ? "show" : "voteDisplay"}`}>
                      {redVote} votes
                    </p>
                  </button>

                  <div className="nextQContainer">
                    <a className="nextQuestionBtn" href="#nextQuestion">
                      Next Question
                    </a>
                  </div>
                </form>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
