import './App.css';
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Nav,
  ViewWalkthrough,
  Walkthrough,
  WalkthroughEdit,
  LoginForm,
  SignUpForm
} from './components'

function App() {
  const [walkthroughs, setWalkthroughs] = useState([])
  const [activeWalkthrough, setActiveWalkthrough] = useState({})
  const [view, setView] = useState({})
  const [user, setUser] = useState({ email: '', password: '' })
  const [activeUser, setActiveUser] = useState('')

  return (
    <div className="App">


      <Nav />
      <Switch>

        <Route
          path='/signup'
          render={(routerProps) => <SignUpForm user={user} setUser={setUser} />}
        />

        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>


        <Route
          path='/login'
          render={(routerProps) => (
            <LoginForm
              user={user}
              setUser={setUser}
              setActiveUser={setActiveUser}
              activeUser={activeUser}
            />
          )}
        />

        <Route exact path='/walkthroughs'>
          <Walkthrough walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} activeWalkthrough={activeWalkthrough} setActiveWalkthrough={setActiveWalkthrough} />
        </Route>

        <Route path='/walkthroughs/edit'>
          <WalkthroughEdit />
        </Route>

        <Route exact path='/walkthroughs/view'>
          <ViewWalkthrough activeWalkthrough={activeWalkthrough} view={view} setView={setView} />
        </Route>

        <Route>
          <WalkthroughEdit />
        </Route>

      </Switch>




    </div>
  );
}

export default App;
