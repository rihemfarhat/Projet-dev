import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css"; // Assurez-vous que vous avez le bon style

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");  // Nouveau pour afficher un message de succès

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        bio,
      });

      // Si l'inscription réussit, on affiche un message de succès
      setSuccessMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      setErrorMessage(""); // Effacer le message d'erreur en cas de succès

      // Redirection après un petit délai pour montrer le message
      setTimeout(() => {
        navigate("/login");
      }, 2000);  // Rediriger après 2 secondes
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Une erreur est survenue. Veuillez réessayer.");
      } else {
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  return (
    <section className="reg">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}  

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </section>
  );
};

export default Register;
