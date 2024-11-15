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
            location: "Tunis, Tunisie",
            description: "Développement d'applications web avec React.",
            applyLink: "#"
        },
        {
            id: 2,
            title: "Chef de Produit",
            company: "Startup B",
            location: "Sfax, Tunisie",
            description: "Gestion des produits et stratégie.",
            applyLink: "#"
        },
        {
            id: 3,
            title: "Développeur Backend",
            company: "TechCorp",
            location: "Monastir, Tunisie",
            description: "Travail sur les services backend avec Node.js et MongoDB.",
            applyLink: "#"
        },
        {
            id: 4,
            title: "Data Analyst",
            company: "DataVision",
            location: "Remote, Tunisie",
            description: "Analyse de données et création de rapports business intelligents.",
            applyLink: "#"
        },
        {
            id: 5,
            title: "Designer UI/UX",
            company: "DesignPro",
            location: "Sousse, Tunisie",
            description: "Création de designs modernes et conviviaux pour les produits numériques.",
            applyLink: "#"
        },
        {
            id: 6,
            title: "Marketing Manager",
            company: "GrowthX",
            location: "Tunis, Tunisie",
            description: "Gestion des campagnes marketing et stratégie digitale.",
            applyLink: "#"
        },
        {
            id: 7,
            title: "Ingénieur Cloud",
            company: "CloudTech",
            location: "Bizerte, Tunisie",
            description: "Gestion des infrastructures cloud et déploiement d'applications.",
            applyLink: "#"
        },
        {
            id: 8,
            title: "Développeur Mobile",
            company: "MobileLabs",
            location: "Tataouine, Tunisie",
            description: "Développement d'applications mobiles pour Android et iOS.",
            applyLink: "#"
        },
        {
            id: 9,
            title: "Chef de Projet IT",
            company: "TechSolutions",
            location: "Kairouan, Tunisie",
            description: "Gestion de projets IT pour des clients internationaux.",
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
                    <JobList jobs={jobs} onApplyClick={handleApplyClick} />
                </div>
            )}
        </div>
    );
}

export default Jobs;
