import './App.css';
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
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

      {/* <Route exact path='/walkthroughs'>
          <Walkthrough walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} />
        </Route> */}


      <ViewWalkthrough />


    </div>
  );
}

export default App;
