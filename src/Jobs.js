// src/components/Jobs.js
import React, { useState } from "react";
import JobList from "./JobList";
import CVSubmission from "./CVSubmission";

function Jobs() {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            id: 1,
            title: "Développeur Frontend",
            company: "Startup A",
            location: "Paris, France",
            description: "Développement d'applications web avec React.",
            applyLink: "#"
        },
        {
            id: 2,
            title: "Chef de Produit",
            company: "Startup B",
            location: "Lyon, France",
            description: "Gestion des produits et stratégie.",
            applyLink: "#"
        }
    ];

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
    };

    const handleBackToJobs = () => {
        setSelectedJob(null);
    };

    return (
        <div className="jobs-container">
            {selectedJob ? (
                <CVSubmission jobTitle={selectedJob} onBack={handleBackToJobs} />
            ) : (
                <div>
                    <h1>Offres de Jobs dans les Startups</h1>
                    <JobList jobs={jobs} onApplyClick={handleApplyClick} />
                </div>
            )}
        </div>
    );
}

export default Jobs;
