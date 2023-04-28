import logo from './logo.svg';
import './App.css';
import Forms from './Login';
import StudentPage from './StudentHomepage';
import FacultyPage from './FacultyHomepage';
import Profile from './Profile';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
function App() {
  const [isStudent, setIsStudent] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cookies, setCookie] = useCookies(['isLogIn', 'isstu']);

  function login(data){
    const student = "22103945"
    const admin = "admin0879"
    
    if(data.email === student && data.password === student){
      setIsLoggedIn(true)
      setIsStudent(true)
      setCookie('isLogIn',true, {path:'/'})
    }
    else if(data.email === admin && data.password === admin){
      setIsLoggedIn(true)
      setIsStudent(false)
      setCookie('isLogIn',true, {path:'/'})
    }
    else{
      alert("Incorrect Credentials")
    }
  }

  function logout(){
    setCookie('isLogIn', false, {path:'/'})
    setIsLoggedIn(false)
  }

  useEffect(()=>{
    if(cookies.isLogIn === 'true'){
      //setIsLoggedIn(cookies.isLogIn)
    }    
  }, [cookies.isLogIn])

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
