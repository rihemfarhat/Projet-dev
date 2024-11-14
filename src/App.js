import React, { useState } from "react"; /*hello rihem */ 
import './App.css';
import Navbarr from './navbar';
import "./gradient";
import TextGradient from './gradient';
import NetworkBackground from "./NetworkBackground";
import ContactUs from "./contactus";
import logo from './Capture_d_écran_2024-11-09_210108-removebg-preview.png';
import Register from "./Register";
import Login from "./Login";
import JobList from './JobList';
import CVSubmission from './CVSubmission';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCareers, setShowCareers] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

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
        setSelectedJob(null);
    };

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
    };

    const handleBackToJobs = () => {
        setSelectedJob(null);
    };

    const jobs = [
        {
            id: 1,
            title: 'Développeur Frontend',
            company: 'Startup A',
            location: 'Paris, France',
            description: 'Développement d\'applications web avec React.',
            applyLink: '#'
        },
        {
            id: 2,
            title: 'Chef de Produit',
            company: 'Startup B',
            location: 'Lyon, France',
            description: 'Gestion des produits et stratégie.',
            applyLink: '#'
        }
    ];

    return (
        <>
            <NetworkBackground />
            
            {!showRegister && !showLogin && !showCareers && (
                <div className="barre">
                    <img className="petitlogo" src={logo} alt="Logo" />
                    <Navbarr className="Navbarr" setShowRegister={handleShowRegister} setShowCareers={handleShowCareers} /> 
                </div>
            )}

            {showRegister ? (
                <div><img className="petitlogo" src={logo} alt="Logo" />
                    <Register className="register" onSignInClick={handleShowLogin} />
                </div>
            ) : showLogin ? (
                <div><img className="petitlogo" src={logo} alt="Logo" /><Login /></div>
            ) : showCareers ? (
                selectedJob ? (
                    <CVSubmission jobTitle={selectedJob} onBack={handleBackToJobs} />
                ) : (
                    <div className="App">
                        <h1>Offres de Jobs dans les Startups</h1>
                        <JobList jobs={jobs} onApplyClick={handleApplyClick} />
                    </div>
                )
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
