import logo from './logo.svg';
import './App.css';
import Forms from './Login';
import StudentPage from './StudentHomepage';
import FacultyPage from './FacultyHomepage';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [isStudent, setIsStudent] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function login(data){
    const student = "22103945"
    const admin = "admin0879"
    
    if(data.email === student && data.password === student){
      setIsLoggedIn(true)
      setIsStudent(true)
    }
    if(data.email === student && data.password === student){
      setIsLoggedIn(true)
      setIsStudent(false)
    }
  }

  

  return (
    <div className="App">
      {
        !isLoggedIn ? <Forms doLogin={login}/> :
        (isStudent ? <StudentPage /> : <FacultyPage/>)
      }
    </div>
  );
}

export default App;
