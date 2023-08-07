import React from "react";
import '../App.css';
import Form from "./Form";
// import Login from "./Login";

// const isLoggedIn = true ;
// const currentTime = new Date().getHours();
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered}/>
    </div>
    // <div className="container">
    //    {isLoggedIn === true ? <h1>Hello</h1> : <Login />} 
    //    {currentTime > 12 &&  <h1>Why aren't you working?</h1>}
    // </div>
  );
}

export default App;
