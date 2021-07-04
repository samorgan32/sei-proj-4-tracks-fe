import './App.css';
import React, { useState } from 'react'
import {
  Home,
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
      <Home walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} />
    </div>
  );
}

export default App;
