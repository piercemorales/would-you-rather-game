(this["webpackJsonppierce-morales-project-five"]=this["webpackJsonppierce-morales-project-five"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=(n(18),n(8)),s=n(9),l=n(11),u=n(10),p=n(12),m=(n(19),n(2)),v=n.n(m);n(21);v.a.initializeApp({apiKey:"AIzaSyAw2AFRCleo_E54vnkvFJXJx7ZO89kV2Cg",authDomain:"pierce-morales-project-five.firebaseapp.com",databaseURL:"https://pierce-morales-project-five.firebaseio.com",projectId:"pierce-morales-project-five",storageBucket:"pierce-morales-project-five.appspot.com",messagingSenderId:"897691297756",appId:"1:897691297756:web:cfe6a7c6dce33c699e1119"});var d=v.a,f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).incrementCount=function(t){console.log("click");var n=d.database().ref();console.log(t.target.index),console.log(n.child("questionObject").child("question1").update({vote1:e.state.voteIncrement})),e.setState({voteIncrement:e.state.voteIncrement+1})},e.state={questionArray:[],userNameArray:[],voteIncrement:0,currentQuestion:[]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(t){console.log(t.val());var n=t.val().questionObject,o=Object.values(n);e.setState({questionArray:o})}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"wrapper"},a.a.createElement("h1",null,"wyr"),this.state.questionArray.map((function(t){var n=t.option1,o=t.option2,r=t.vote1,c=t.vote2;return a.a.createElement("div",{className:"buttonContent"},a.a.createElement("button",{id:"questionIndex",className:"blueButton topicButton",value:"vote1",onClick:e.incrementCount},n," ",a.a.createElement("p",null,r)),a.a.createElement("button",{id:"questionIndex2",className:"redButton topicButton",value:"vote2",onClick:e.incrementCount},o," ",a.a.createElement("p",null,c)))}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3e5f90e4.chunk.js.map