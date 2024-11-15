import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbarr({ className, setShowRegister, setShowCareers,setShowAboutUs }) {
    const list = ["Home", "About Us", "Events", "Careers", "Register"];
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);

    const renderMenuItem = (item) => {
        if (item === "Register") {
            return <button onClick={() => setShowRegister(true)}>{item}</button>;
        }
        if (item === "Careers") {
            return <button onClick={() => setShowCareers(true)}>{item}</button>;
        }
        if (item === "About Us") {
            return <button onClick={() => setShowAboutUs(true)}>{item}</button>;
        }
        return <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>;
    };

    return (
        <div 
            className={className}
            onMouseLeave={() => setShowVerticalMenu(false)} // Cache le menu lorsque la souris quitte
        >
            {/* Conteneur de l'icône et du menu déroulant */}
            <div className="menu-container">
                {/* Icône ☰ */}
                <div 
                    className="menu-icon"
                    onMouseEnter={() => setShowVerticalMenu(true)} // Affiche le menu lors du survol
                >
                    ☰
                </div>
                
                {/* Menu vertical */}
                <div 
                    className={`vertical-menu ${showVerticalMenu ? 'show' : ''}`}
                    onMouseEnter={() => setShowVerticalMenu(true)} // Garde le menu visible lors du survol du menu
                    onMouseLeave={() => setShowVerticalMenu(false)} // Cache le menu lorsque la souris quitte
                >
                    {list.map((item) => (
                        <div key={`vertical-${item}`} className="vertical-item">
                            {renderMenuItem(item)}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Éléments horizontaux de la barre de navigation */}
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
