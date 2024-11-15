import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

function Navbarr({ className, setShowRegister, setShowCareers, setShowAboutUs, resetHomePage , setShowEventPage}) {
    const list = ["Home", "About Us", "Events", "Careers", "Register"];
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);

    const renderMenuItem = (item) => {
        if (item === "Register") {
            return <button onClick={() => setShowRegister(true)}>{item}</button>;
        }
        if (item === "Careers") {
            return <button onClick={() => setShowCareers(true)}>{item}</button>;
        }
        if (item === "Events") {
            return <button onClick={() => setShowEventPage(true)}>{item}</button>;
        }
        if (item === "About Us") {
            return <button onClick={() => setShowAboutUs(true)}>{item}</button>;
        }
        if (item === "Home") {
            return <button onClick={resetHomePage}>{item}</button>; // Home button to reset
        }
        if (item === "Events") {
            return <button onClick={() => setShowEventPage(true)}>{item}</button>;
        }
        return <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>;
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
