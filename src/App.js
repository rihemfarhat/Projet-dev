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
import Advice from "./Advice";
import logo from './Capture_d_écran_2024-11-09_210108-removebg-preview.png';

function App() {
    const [currentPage, setCurrentPage] = useState(""); // État pour la page active
    const [isAuthenticated, setIsAuthenticated] = useState(false); // État pour l'authentification

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        setCurrentPage("home"); // Redirige vers la page d'accueil après connexion
    };

    const renderPage = () => {
        if (!isAuthenticated) {
            // Rendu des pages Login et Register avant authentification
            if (currentPage === "login") {
                return <Login onLoginSuccess={handleLoginSuccess} />;
            } 
            if (currentPage === "register") {
                return <Register onSignInClick={() => setCurrentPage("login")} />;
            }
            // Page par défaut avec les boutons si aucune page spécifique n'est choisie
            return (
                <div className="login-register-background">
                    <NetworkBackground />
                    <TextGradient />
                    <div className="top-right-buttons">
                        <button className="styled-button" onClick={() => setCurrentPage("login")}>Login</button>
                        <button className="styled-button" onClick={() => setCurrentPage("register")}>Sign Up</button>
                    </div>
                </div>
            );
        }

        // Rendu des fonctionnalités après connexion
        switch (currentPage) {
            case "careers":
                return <Jobs />;
            case "aboutus":
                return <AboutUs />;
            case "events":
                return <EventPage />;
            case "advice":
                return <Advice />;
            case "home":
            default:
                return (
                    <>
                        <NetworkBackground />
                        <TextGradient />
                    </>
                );
        }
    };

    return (
        <div className="App">
            {/* Barre de navigation après connexion */}
            {isAuthenticated && (
                <div className="barre">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr
                        className="Navbarr"
                        setShowRegister={() => setCurrentPage("register")}
                        setShowCareers={() => setCurrentPage("careers")}
                        setShowAboutUs={() => setCurrentPage("aboutus")}
                        resetHomePage={() => setCurrentPage("home")}
                        setShowEventPage={() => setCurrentPage("events")}
                        setShowAdvice={() => setCurrentPage("advice")}
                    />
                </div>
            )}
            {/* Rendu principal */}
            {renderPage()}
            {/* Footer après connexion */}
            {isAuthenticated && (
                <footer>
                    <ContactUs className3="imgg" className1="info" className2="nav" />
                </footer>
            )}
        </div>
    );
}

export default App;
