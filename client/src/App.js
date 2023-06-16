
import './App.css';
import LogoutButton from './LogoutButton';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if (r.ok){
        r.json().then((user)=> setUser(user))
      }
    });
  }, []);

  if (user){
    return <h2>Welcome, {user.name}</h2>
  } else{
    return (
      <div className="App">
        <LoginForm />
        <SignupForm />
        <LogoutButton />
      </div>
    );

  }

  
}

export default App;
