// CVSubmission.js
import React, { useState } from "react";
import './cvsubmission.css';


function CVSubmission({ jobTitle, onBack }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cv, setCv] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle CV submission logic here
        alert(`CV submitted for the position: ${jobTitle}`);
    };

    return (
        <div className="cv-submission">
            <h2>Submit Your CV for {jobTitle}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Upload CV:
                    <input type="file" onChange={(e) => setCv(e.target.files[0])} required />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onBack}>Back to Jobs</button>
            </form>
        </div>
    );
}

export default CVSubmission;
