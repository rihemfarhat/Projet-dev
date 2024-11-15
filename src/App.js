import React, { useState } from "react";
import './App.css';
import Navbarr from './navbar';
import NetworkBackground from "./NetworkBackground";
import TextGradient from './gradient';
import ContactUs from './contactus'; // Assurez-vous que ce composant existe
import Register from "./Register";
import Login from "./Login";
import Jobs from "./Jobs"; // Import du nouveau composant Jobs
import logo from './Capture_d_écran_2024-11-09_210108-removebg-preview.png';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCareers, setShowCareers] = useState(false);

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowCareers(false);
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowCareers(false);
    };

    const handleShowCareers = () => {
        setShowCareers(true);
        setShowRegister(false);
        setShowLogin(false);
    };

    return (
        <>
            <NetworkBackground />

            {!showRegister && !showLogin && !showCareers && (
                <div className="barre">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr 
                        className="Navbarr" 
                        setShowRegister={handleShowRegister} 
                        setShowCareers={handleShowCareers} 
                    />
                </div>
            )}

            {showRegister ? (
                <div>
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Register className="register" onSignInClick={handleShowLogin} />
                </div>
            ) : showLogin ? (
                <div>
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Login />
                </div>
            ) : showCareers ? (
                <Jobs /> // Utilisation du nouveau composant Jobs
            ) : (
                <>
                    <TextGradient />
                    <footer>
                        <ContactUs className3="imgg" className1="info" className2="nav" />
                    </footer>
                </>
            )}
        </>
    );
}

export default App;
