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
    const [currentPage, setCurrentPage] = useState("home");

    // Function to render the correct page based on the currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case "register":
                return <Register className="register" onSignInClick={() => setCurrentPage("login")} />;
            case "login":
                return <Login />;
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
        <>
            {/* Navbar toujours visible */}
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

            {/* Contenu de la page */}
            {renderPage()}

            {/* Footer toujours visible */}
            <footer>
                <ContactUs className3="imgg" className1="info" className2="nav" />
            </footer>
        </>
    );
}

export default App;
