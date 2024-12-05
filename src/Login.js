import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";  // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);  // State for button hover effect

    const goToMainPage = (e) => {
        e.preventDefault();
        navigate("/");  // Redirect to the main page
    };

    return (
        <section className="log">
            <h1 onClick={goToMainPage}>Login</h1>
            
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    required
                    placeholder="Enter your username"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                />

                {/* Button styled to match the signup page */}
                <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={isHovered ? "hovered" : ""}
                >
                    Login
                </button>
            </form>
            <p>
                Need an account?<br />
                <span className="line">
                    <a href="#">Register</a>
                </span>
            </p>
        </section>
    );
};

export default Login;
