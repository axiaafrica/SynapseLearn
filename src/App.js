import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PasswordSetting from './pages/PasswordSetting';
import ProfileSetting from './pages/ProfileSetting';
import Verification from './pages/Verification';
import Registration from './pages/Registration';
import PasswordRecovery from './pages/PasswordRecovery';
import PasswordReset from './pages/PasswordReset';


function App() {
  return <div>
    <Home/>

  </div>
  
}



export default App;

// ignore the code below for now
{/* <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Profilesetting" element={<ProfileSetting />} />
          <Route path="/Passwordsetting" element={<PasswordSetting />} />
        </Routes>
      </Router> */}