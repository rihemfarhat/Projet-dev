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
import EventPage from "./EventPage";
import logo from './Capture_d_écran_2024-11-09_210108-removebg-preview.png';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCareers, setShowCareers] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showEventPage, setShowEventPage] = useState(false);

    const handleShowHome = () => {
        setShowRegister(false);
        setShowLogin(false);
        setShowCareers(false);
        setShowAboutUs(false);
        setShowEventPage(false);
    };

    const handleShowEventPage = () => {
        setShowRegister(false);
        setShowLogin(false);
        setShowCareers(false);
        setShowAboutUs(false);
        setShowEventPage(true);
    };

    const handleShowAboutUs = () => {
        setShowAboutUs(true);
        setShowRegister(false);
        setShowLogin(false);
        setShowEventPage(false);
        setShowCareers(false);
    };

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowCareers(false);
        setShowAboutUs(false);
        setShowEventPage(false);
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowCareers(false);
        setShowAboutUs(false);
        setShowEventPage(false);
    };

    const handleShowCareers = () => {
        setShowCareers(true);
        setShowRegister(false);
        setShowLogin(false);
        setShowAboutUs(false);
        setShowEventPage(false);
    };

    return (
        <>
            <NetworkBackground />
            
            {/* Afficher la barre de navigation si aucune page n'est sélectionnée */}
            {!showRegister && !showLogin && !showCareers && !showAboutUs && !showEventPage && (
                <div className="barre">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        setShowEventPage={handleShowEventPage}
                    />
                </div>
            )}

            {/* Page Register */}
            {showRegister && (
                <div>
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Register className="register" onSignInClick={handleShowLogin} />
                </div>
            )}

            {/* Page Login */}
            {showLogin && (
                <div>
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Login />
                </div>
            )}

            {/* Page Careers */}
            {showCareers && (
                <div className="CareersNavbar">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        resetHomePage={handleShowHome}
                        setShowEventPage={handleShowEventPage}
                    />
                    <Jobs />
                </div>
            )}

            {/* Page Event */}
            {showEventPage && (
                <div className="EventPageNavbar">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        resetHomePage={handleShowHome}
                    />
                    <EventPage />
                </div>
            )}

            {/* Page AboutUs */}
            {showAboutUs && (
                <div className="AboutusNavbar">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={handleShowRegister}
                        setShowCareers={handleShowCareers}
                        setShowAboutUs={handleShowAboutUs}
                        resetHomePage={handleShowHome}
                    />
                    <AboutUs />
                </div>
            )}

            {/* Page d'accueil (TextGradient et footer) */}
            {!showRegister && !showLogin && !showCareers && !showAboutUs && !showEventPage && (
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
