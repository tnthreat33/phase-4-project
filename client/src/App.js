import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useEffect, useState } from 'react';
import {Switch, Route} from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if (r.ok){
        r.json().then((user)=> setUser(user))
      }
    });
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return(
    <div>
      <Header user= {user} onLogout={handleLogout}/>
      <Switch>
        <Route exact path= '/login'>
          <LoginForm onLogin={handleLogin}/>
        </Route>
        <Route exact path= '/signup'>
          <SignupForm />
        </Route>
      </Switch>
    </div>
  )
  }

export default App;
