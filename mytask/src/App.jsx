import { useState } from "react";

import { useEffect } from "react";
import LoginPage from "./pages/loginPage"
import TaskPage from "./pages/TaskPage"
import Navbar from "./components/Navbar";
import { useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    }else{
      setIsLoggedIn(false)
    }
   
  }, []);

  
  return (
    <>
    <Navbar/>
      {/* {isLoggedIn ? <TaskPage /> : <LoginPage/>} */}
    </>
  );
}

export default App
