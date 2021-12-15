import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PasswordUpdate from './components/UpdatePassword';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <ForgotPassword />
      <PasswordUpdate />
    </div>
  );
}

export default App;
