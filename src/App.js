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

    // Exemple de plusieurs données d'offres d'emploi
    const jobData = [
        {
            id: 1,
            logo: "/images/frontend.png",
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "Remote",
            description: "Build and maintain user interfaces for web applications. Knowledge of React, JavaScript, and CSS is required.",
        },
        {
            id: 2,
            logo: "/images/backend.webp",
            title: "Backend Developer",
            company: "Code Solutions",
            location: "New York, USA",
            description: "Design and implement server-side logic and databases. Experience with Node.js and Python is a plus.",
        },
        {
            id: 3,
            logo: "/images/fullstack.jpg",
            title: "Full Stack Developer",
            company: "Innovatech",
            location: "San Francisco, USA",
            description: "Develop both frontend and backend systems for web applications. Expertise in MERN stack is required.",
        },
        {
            id: 4,
            logo: "/images/uiux.jpg",
            title: "UI/UX Designer",
            company: "Creative Minds",
            location: "Remote",
            description: "Design intuitive and visually appealing user interfaces. Proficiency in Figma or Adobe XD is necessary.",
        },
        {
            id: 5,
            logo: "/images/datascience.jpg",
            title: "Data Scientist",
            company: "DataWorks",
            location: "Toronto, Canada",
            description: "Analyze and interpret complex datasets. Knowledge of machine learning techniques is beneficial.",
        },
    ];

    const renderPage = () => {
        switch (currentPage) {
            case "register":
                return <Register className="register" onSignInClick={() => setCurrentPage("login")} />;
            case "login":
                return <Login />;
            case "careers":
                return <Jobs jobs={jobData} />;
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
            {currentPage !== "login" && currentPage !== "register" && (
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
            {renderPage()}
            {currentPage !== "login" && currentPage !== "register" && (
                <footer>
                    <ContactUs className3="imgg" className1="info" className2="nav" />
                </footer>
            )}
        </>
    );
}

export default App;
