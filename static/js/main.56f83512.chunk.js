(this["webpackJsonppierce-morales-project-five"]=this["webpackJsonppierce-morales-project-five"]||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(11),a(9)),s=a(1),u=a(2),l=a(4),m=a(3),p=a(5),v=a(8),d=a.n(v);a(22);d.a.initializeApp({apiKey:"AIzaSyBaMF3Ot_IKB9ScxPgGi4fJ5PVPP8i0bPY",authDomain:"pierce-morales-project-f-ef1c3.firebaseapp.com",databaseURL:"https://pierce-morales-project-f-ef1c3.firebaseio.com",projectId:"pierce-morales-project-f-ef1c3",storageBucket:"pierce-morales-project-f-ef1c3.appspot.com",messagingSenderId:"527917855228",appId:"1:527917855228:web:005ef6b7b58b07896d0279"});var f=d.a,b=a(6),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).scrollToQuestion=function(e){e.preventDefault(),Object(b.a)(".question",{duration:1e3,offset:-20,callback:void 0,a11y:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerContent"},r.a.createElement("h1",null,"Choice"),r.a.createElement("p",null,"Choose one of the two options that you prefer more and see how many others voted with or against you!"),r.a.createElement("a",{onClick:this.scrollToQuestion,href:"#questionSection",className:"playBtn"},"play"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).nextQuestScroll=function(e){e.preventDefault();var t=document.querySelector("form").clientHeight;Object(b.a)(t,{duration:1e3,offset:0,callback:void 0,a11y:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nextQContainer"},r.a.createElement("a",{onClick:this.nextQuestScroll,className:"nextQuestionBtn",href:"# "},"Next Question"))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).incrementCountBlue=function(t){t.preventDefault();var a=e.state.currentQuestion[t.currentTarget.id].qName.vote1+1;f.database().ref("questionObject").child("".concat(e.state.currentQuestion[t.currentTarget.id].qNumber)).update({vote1:a});var n=Object(i.a)(e.state.currentQuestion);n[t.currentTarget.id].voted=!0,e.setState({blueVoteIncrement:a,currentQuestion:n})},e.incrementCountRed=function(t){t.preventDefault();var a=e.state.currentQuestion[t.currentTarget.id].qName.vote2+1;f.database().ref("questionObject").child("".concat(e.state.currentQuestion[t.currentTarget.id].qNumber)).update({vote2:a});var n=Object(i.a)(e.state.currentQuestion);n[t.currentTarget.id].voted=!0,e.setState({redVoteIncrement:a,currentQuestion:n})},e.state={questionArray:[],userNameArray:[],redVoteIncrement:0,blueVoteIncrement:0,currentQuestion:[]},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=t.val().questionObject,n=Object.values(a),r=[];for(var o in a){var c={qNumber:o,qName:a[o],voted:!1};r.push(c)}e.setState({questionArray:n,currentQuestion:r})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,null),r.a.createElement("section",{id:"questionSection",className:"question"},r.a.createElement("h2",null,"Choose Between..."),this.state.questionArray.map((function(t,a){var n=t.option1,o=t.option2,c=t.vote1,i=t.vote2,s=a,u=e.state.currentQuestion[a].voted;return r.a.createElement("form",null,r.a.createElement("button",{id:s,className:"blueButton topicButton",value:"vote1",onClick:e.incrementCountBlue,disabled:!!u},n," ",r.a.createElement("p",{className:"".concat(u?"show":"voteDisplay")},c," votes")),r.a.createElement("button",{id:s,className:"redButton topicButton",value:"vote2",onClick:e.incrementCountRed,disabled:!!u},o," ",r.a.createElement("p",{className:"".concat(u?"show":"voteDisplay")},i," votes")),r.a.createElement(j,null))})),r.a.createElement("div",{className:"endSection"},r.a.createElement("h2",null,"There are no more questions!"," ",r.a.createElement("span",null,"Come back soon for more!"))))),r.a.createElement("footer",{className:"footerSection"},r.a.createElement("div",{className:"footerContent"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://piercemorales.com/",rel:"noopener noreferrer",target:"_blank"},"Pierce Morales")," ","\xa9 2019"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.56f83512.chunk.js.map