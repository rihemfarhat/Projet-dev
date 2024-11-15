import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbarr({ className, setShowRegister, setShowCareers, setShowAboutUs, resetHomePage }) {
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
        if (item === "Home") {
            return <button onClick={resetHomePage}>{item}</button>; // Home button to reset
        }
        return <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>;
    };

    return (
        <div 
            className={className}
            onMouseLeave={() => setShowVerticalMenu(false)} // Hide the menu when mouse leaves
        >
            {/* Menu container */}
            <div className="menu-container">
                {/* Menu icon ☰ */}
                <div 
                    className="menu-icon"
                    onMouseEnter={() => setShowVerticalMenu(true)} // Show menu on hover
                >
                    ☰
                </div>
                
                {/* Vertical menu */}
                <div 
                    className={`vertical-menu ${showVerticalMenu ? 'show' : ''}`}
                    onMouseEnter={() => setShowVerticalMenu(true)} // Keep menu visible on hover
                    onMouseLeave={() => setShowVerticalMenu(false)} // Hide the menu when mouse leaves
                >
                    {list.map((item) => (
                        <div key={`vertical-${item}`} className="vertical-item">
                            {renderMenuItem(item)}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Horizontal navigation items */}
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
