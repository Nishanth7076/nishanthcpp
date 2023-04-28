import logo from './logo.svg';
import './App.css';
import Forms from './Login';
import StudentPage from './StudentHomepage';
import FacultyPage from './FacultyHomepage';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [isStudent, setIsStudent] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function login(data){
    const student = "22103945"
    const admin = "admin0879"
    
    if(data.email === student && data.password === student){
      setIsLoggedIn(true)
      setIsStudent(true)
    }
    else if(data.email === admin && data.password === admin){
      setIsLoggedIn(true)
      setIsStudent(false)
    }
    else{
      alert("Incorrect Credentials")
    }
  }

  function logout(){
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {
        !isLoggedIn ? <Forms doLogin={login}/> :
        (isStudent ? <StudentPage doLogout={logout}/> : <FacultyPage doLogout={logout}/>)
      }
    </div>
  );
}

export default App;
