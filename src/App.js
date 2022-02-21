import './App.css';
import {PlayerContextProvider} from "./context/playerContext";
import React from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Browse from "./pages/Browse";
import LandingScreen from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import {UserContextProvider} from "./context/userContext";
import PlayScreen from "./pages/playScreen";


function App() {
  return (
    <div className="App">
        <UserContextProvider>
            <PlayerContextProvider >
                <Router>
                    <Routes>
                        <Route exact path={'/'} element={<LandingScreen/>}/>
                        <Route exact path={'/browse'} element={<Browse/>}/>
                        <Route exact path={'/play'} element={<PlayScreen/>}/>
                        <Route exact path={'/login'} element={<LoginScreen/>}/>
                        <Route exact path={'/signup'} element={<SignUpScreen/>}/>
                    </Routes>
                </Router>
            </PlayerContextProvider>
        </UserContextProvider>
    </div>
  );
}

export default App;
