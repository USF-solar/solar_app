import './App.css';
import Home from './components/Home';
import React, { useState } from 'react';

function App() {

  const [info, setInfo] = useState(false)

  let content;
  if (info) {
    content = <Info set={setInfo}/>
  } else {
    content = <Home />
  }
  return (
    <div className="App">
      <button id="signup" onClick={() => setInfo(true)}>Learn More</button>
      {content}
    </div>
  );
}

function Info(props) {
  return (
    <div>
      Thank you for your interest in Solar Scan. At this time, we only have a demo available. Please check back for updates on our future plans.
      
      <button onClick={() => props.set(false)}>Back</button>
    </div>
  )
}

export default App;
