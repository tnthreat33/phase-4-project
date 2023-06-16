
import './App.css';
import LogoutButton from './LogoutButton';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <SignupForm />
      <LogoutButton />
    </div>
  );
}

export default App;
