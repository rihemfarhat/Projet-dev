import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbarr({ 
  className, 
  setShowRegister, 
  setShowCareers, 
  setShowAdvice, 
  setShowAboutUs, 
  resetHomePage, 
  setShowEventPage, 
  loggedIn  
}) {
    const list = ["Home", "About Us", "Events", "Careers", "Career Advice"];
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);

    const renderMenuItem = (item) => {
        switch (item) {
            case "Home":
                return <button onClick={resetHomePage}>{item}</button> ;
            // case "Register":
            //     return <button onClick={() => setShowRegister()}>Register</button>;
            case "Careers":
                return  <button onClick={() => setShowCareers()}>Careers</button> ;
            case "Career Advice":
                return  <button onClick={() => setShowAdvice()}>Career Advice</button> ;
            case "Events":
                return  <button onClick={() => setShowEventPage()}>Events</button> ;
            case "About Us":
                return  <button onClick={() => setShowAboutUs()}>About Us</button>;
            default:
                return <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>;
        }
    };

    return (
        <div
            className={className}
            onMouseLeave={() => setShowVerticalMenu(false)} 
        >
            <div className="menu-container">
                {/* <div
                    className="menu-icon"
                    onMouseEnter={() => setShowVerticalMenu(true)} // Show menu on hover
                >
                    ☰
                </div> */}

                {/* Vertical menu */}
                <div
                    className={`vertical-menu ${showVerticalMenu ? "show" : ""}`}
                    onMouseEnter={() => setShowVerticalMenu(true)} // Keep menu visible while hovered
                    onMouseLeave={() => setShowVerticalMenu(false)} // Hide menu on mouse leave
                >
                    {list.map((item) => (
                        <div key={`vertical-${item}`} className="vertical-item">
                            {renderMenuItem(item)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Horizontal navigation */}
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
