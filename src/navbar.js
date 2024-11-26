import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

function Navbarr({ className, setShowRegister, setShowCareers, setShowAdvice, setShowAboutUs, resetHomePage, setShowEventPage }) {
    const list = ["Home", "About Us", "Events", "Careers", "Career Advice", "Register"];
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);

    const renderMenuItem = (item) => {
        switch (item) {
            case "Home":
                return <button onClick={resetHomePage}>{item}</button>; // Home button to reset
            case "Register":
                return <button onClick={() => setShowRegister()}>Register</button>;
            case "Careers":
                return <button onClick={() => setShowCareers()}>Careers</button>;
            case "Career Advice":
                return <button onClick={() => setShowAdvice()}>Career Advice</button>;
            case "Events":
                return <button onClick={() => setShowEventPage()}>Events</button>;
            case "About Us":
                return <button onClick={() => setShowAboutUs()}>About Us</button>;
            default:
                return <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>;
        }
    };

    return (
        <div
            className={className}
            onMouseLeave={() => setShowVerticalMenu(false)} // Masquer le menu lorsque la souris sort
        >
            {/* Conteneur principal du menu */}
            <div className="menu-container">
                {/* Icône du menu ☰ */}
                <div
                    className="menu-icon"
                    onMouseEnter={() => setShowVerticalMenu(true)} // Afficher le menu au survol
                >
                    ☰
                </div>

                {/* Menu vertical */}
                <div
                    className={`vertical-menu ${showVerticalMenu ? "show" : ""}`}
                    onMouseEnter={() => setShowVerticalMenu(true)} // Maintenir le menu visible au survol
                    onMouseLeave={() => setShowVerticalMenu(false)} // Masquer le menu lorsque la souris sort
                >
                    {list.map((item) => (
                        <div key={`vertical-${item}`} className="vertical-item">
                            {renderMenuItem(item)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation horizontale */}
            <table>
                <tbody>
                    <tr>
                        {list.map((item) => (
                            <td key={`horizontal-${item}`} className="horizontal-item">
                                {renderMenuItem(item)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Navbarr;
