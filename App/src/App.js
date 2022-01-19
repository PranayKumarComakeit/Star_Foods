// import Login from './components/Login';
// import './App.css';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import PasswordUpdate from './components/UpdatePassword';
// import UserDb from './components/UserDb';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         {/* <Route exact path="/" element={<Login />}></Route> */}
//         <Route exact path="/" element={<Register />}></Route>
//       </Routes>
//       </BrowserRouter>
      
//     </div>
//   );
// }

// export default App;


import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PasswordUpdate from './components/UpdatePassword';
import BreakfastDashboard from './components/BreakfastDashboard';
import HomePage from './components/HomePage';
import BreakFast from './components/BreakFast';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Register />
      <ForgotPassword />
      <PasswordUpdate /> */}
      {/* <BreakfastDashboard/> */}
      {/* <HomePage/> */}
      <BreakFast />
    </div>
  );
}

export default App;