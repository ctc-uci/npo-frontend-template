import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { BackendProvider } from './contexts/BackendContext';
import Master from './components/Master/Master';
import NavBar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import LoginComplete from './components/LoginComplete/LoginComplete';
// import Mission from './components/Mission/Mission.jsx';
// import About from './components/About/About.jsx';
// import FeaturedStudents from './components/FeaturedStudents/FeaturedStudents.jsx';
// import Contact from './components/Contact/Contact.jsx';
import Profile from './components/Profile/Profile';
import ProfileComplete from './components/ProfileComplete/ProfileComplete';
import classes from './App.css';
// import Search from './components/Search/Search.jsx';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname.toLowerCase();

  return (
    // <BackendProvider>
    <div>
      {['/login', '/profile', '/logincomplete', '/profilecomplete'].includes(currentRoute) || (
        <NavBar />
      )}
      <div className={classes.mainContent}>
        <Routes>
          <Route exact path="/" element={<Master />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logincomplete" element={<LoginComplete />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profilecomplete" element={<ProfileComplete />} />
        </Routes>
      </div>
    </div>
    // </BackendProvider>
  );
}

export default App;
