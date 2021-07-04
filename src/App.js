import './App.css';
import React, { useState } from 'react'
import {
  Nav,
  SlideEdit,
  ViewWalkthrough,
  Walkthrough,
  WalkthroughEdit,
} from './components'

function App() {
  const [walkthroughs, setWalkthroughs] = useState([])
  return (
    <div className="App">
      <Nav />

      <Walkthrough walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} />
    </div>
  );
}

export default App;
