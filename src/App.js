import React, { useState } from "react";
import './App.css';
import Navbarr from './navbar';
import NetworkBackground from "./NetworkBackground";
import TextGradient from './gradient';
import ContactUs from './contactus';
import Register from "./Register";
import Login from "./Login";
import Jobs from "./Jobs";
import AboutUs from "./AboutUs";
import logo from './Capture_d_écran_2024-11-09_210108-removebg-preview.png';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCareers, setShowCareers] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);

    const handleShowHome = () => {
        setShowRegister(false);
        setShowLogin(false);
        setShowCareers(false);
        setShowAboutUs(false);
    };

    const handleShowAboutUs = () => {
        setShowAboutUs(true);
        setShowRegister(false);
        setShowLogin(false);
        setShowCareers(false);
    };

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowCareers(false);
        setShowAboutUs(false);
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowCareers(false);
        setShowAboutUs(false);
    };

    const handleShowCareers = () => {
        setShowCareers(true);
        setShowRegister(false);
        setShowLogin(false);
        setShowAboutUs(false);
    };

    return (
        <>
            <NetworkBackground />
            
            {!showRegister && !showLogin && !showCareers && !showAboutUs && (
                <div className="barre">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        
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
                <div className="CareersNavbar">
                    <img className="petitlogo" src={logo} alt="Logo" />
                      <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        resetHomePage={handleShowHome}
                    />
                <Jobs /></div>
            ) : showAboutUs ? (<div className="AboutusNavbar">
                <img className="petitlogo" src={logo} alt="Logo" />
                <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        resetHomePage={handleShowHome}
                    />
                <AboutUs /></div>
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
