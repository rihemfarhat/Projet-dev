import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";  // Importez le fichier CSS

const Login = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);  // État pour le survol du bouton

    const goToMainPage = () => {
        navigate("/");  // Redirection vers la page principale
    };

    return (
        <section class="log">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required />

                <button type="submit">Login</button>
            </form>
            <p>
                Need an account?<br />
                <span className="line">
                    <a href="#">Register</a>
                </span>
            </p>
            {/* Bouton dynamique avec cadre décoré */}
            <button 
                className={`button-main-page ${isHovered ? "hovered" : ""}`} 
                onClick={goToMainPage}
                onMouseEnter={() => setIsHovered(true)}  // Activation du survol
                onMouseLeave={() => setIsHovered(false)}  // Désactivation du survol
            >
                Go to Main Page
            </button>
        </section>
    );
};

export default Login;
