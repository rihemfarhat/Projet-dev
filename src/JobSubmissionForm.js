import React, { useState } from "react";
import axios from "axios";
import "./JobSubmissionForm.css";

function JobSubmissionForm({ onClose, onJobAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    // Valeur fixe pour `createdBy`
    const createdBy = "6751667e49c7f30ca4c53337";

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Préparer les données avec `createdBy` défini
            const newJob = { 
                title, 
                description, 
                createdBy 
            };

            // Envoyer la requête au backend
            const response = await axios.post("http://localhost:5000/api/posts", newJob);

            // Informer le composant parent du nouveau poste ajouté
            onJobAdded(response.data);

            // Réinitialiser le formulaire
            setTitle("");
            setDescription("");
            setError(null);

            // Fermer le formulaire
            onClose();
        } catch (err) {
            setError("Échec de l'ajout du poste. Veuillez réessayer plus tard.");
        }
    };

    return (
        <div className="job-submission-form">
            <h2>Ajouter un Post de Travail</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre du Poste"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description du Poste"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Ajouter</button>
                <button type="button" onClick={onClose} className="cancel-button">Annuler</button>
            </form>
        </div>
    );
}

export default JobSubmissionForm;
