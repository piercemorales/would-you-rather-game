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

    this.setState({
      blueVoteIncrement: vote
    })
  }

// blue ends here
// red starts here


  incrementCountRed = (e) => {
    e.preventDefault()
    const vote = this.state.currentQuestion[e.currentTarget.id].qName.vote2 + 1;
    const dbRef = firebase.database().ref('questionObject');
    
    dbRef.child(`${this.state.currentQuestion[e.currentTarget.id].qNumber}`).update({ vote2: vote});

    this.setState({
      redVoteIncrement: vote
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
            {
            //mapping through the array to get required values
              this.state.questionArray.map((value, index) => {
              const blueOption = value.option1;
              const redOption = value.option2;
              const blueVote = value.vote1;
              const redVote = value.vote2;
              const currentQ = index
              
              return (
                // topic vote buttons
                <form>
                  <button id={currentQ} className="blueButton topicButton" value="vote1" onClick={this.incrementCountBlue}>
                    {blueOption} <p className="voteDisplay">{blueVote}</p>
                  </button>
                  <button id={currentQ} className="redButton topicButton" value="vote2"onClick={this.incrementCountRed}>
                    {redOption} <p className="voteDisplay">{redVote}</p>
                  </button>
                </form>
                // have another option voted: false direct the onClick to update voted: true 
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
