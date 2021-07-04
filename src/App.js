import './App.css';
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Nav,
  SlideEdit,
  ViewWalkthrough,
  Walkthrough,
  WalkthroughEdit,
  LoginForm
} from './components'

function App() {
  const [walkthroughs, setWalkthroughs] = useState([])
  return (
    <div className="App">


      <Nav />
      <Switch>

        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>

        <Route path='/signup' />

        <Route path='/login'>
          <LoginForm />
        </Route>

        <Route exact path='/walkthroughs'>
          <Walkthrough walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} />
        </Route>

        <Route path='/walkthroughs/edit'>
          <SlideEdit />
        </Route>

        <Route exact path='/walkthroughs/view'>
          <ViewWalkthrough />
        </Route>

      </Switch>




    </div>
  );
}

export default App;
