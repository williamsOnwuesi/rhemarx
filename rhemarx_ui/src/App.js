import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Nav from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import Admin from "./pages/admin";
import Profile from "./pages/profile";
import Footer from "./footer";
import ViewProfileForm from "./pages/viewProfileForm";
import RegistrationForm from "./pages/createProfile";
import './App.css';

function App() {

  const [result, setResult] = useState("");

  const getResult = (result)=>{
    setResult(result);
  }

  //const result = {
   // accessID : "Ik7jP45",
   // accessKey : "Rhemarx!56",
    //userName : "will",
   // sex : "Male",
    //age : 59,
    //address : "Kyauta Street New karu",
    //facialMarks : "No",
    //nationality : "Nigerian",
    //skinColor : "Brown",
    //height : "1.9cm"
  //}

  return (
    <div className="App">

      <Nav/>
      
      <Routes>
        <Route path = "/" exact  element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/users" element = {<Users />}/>
        <Route path = "/admin" element = {<Admin />}/>
        <Route path = "/createProfile" element = {<RegistrationForm/>}/>
        <Route path = "/viewProfileForm" element = {<ViewProfileForm action = {()=>{getResult()}}/>}/>
        <Route path = "/profile" element = {<Profile data = {result} />}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
