import React, { useState } from "react";
import "./jobs.css"; // Make sure the styles are included
import JobList from "./JobList";
import CVSubmission from "./CVSubmission";

function Jobs() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [visibleJobsCount, setVisibleJobsCount] = useState(5); // Start by showing 5 jobs

    const jobs = [
        { id: 1, title: "Développeur Frontend", company: "Startup A", location: "Tunis, Tunisie", description: "Développement d'applications web avec React.", applyLink: "#" },
        { id: 2, title: "Chef de Produit", company: "Startup B", location: "Sfax, Tunisie", description: "Gestion des produits et stratégie.", applyLink: "#" },
        { id: 3, title: "Développeur Backend", company: "TechCorp", location: "Monastir, Tunisie", description: "Travail sur les services backend avec Node.js et MongoDB.", applyLink: "#" },
        { id: 4, title: "Data Analyst", company: "DataVision", location: "Remote, Tunisie", description: "Analyse de données et création de rapports business intelligents.", applyLink: "#" },
        { id: 5, title: "Designer UI/UX", company: "DesignPro", location: "Sousse, Tunisie", description: "Création de designs modernes et conviviaux pour les produits numériques.", applyLink: "#" },
        { id: 6, title: "Marketing Manager", company: "GrowthX", location: "Tunis, Tunisie", description: "Gestion des campagnes marketing et stratégie digitale.", applyLink: "#" },
        { id: 7, title: "Ingénieur Cloud", company: "CloudTech", location: "Bizerte, Tunisie", description: "Gestion des infrastructures cloud et déploiement d'applications.", applyLink: "#" },
        { id: 8, title: "Développeur Mobile", company: "MobileLabs", location: "Tataouine, Tunisie", description: "Développement d'applications mobiles pour Android et iOS.", applyLink: "#" },
        { id: 9, title: "Chef de Projet IT", company: "TechSolutions", location: "Kairouan, Tunisie", description: "Gestion de projets IT pour des clients internationaux.", applyLink: "#" }
    ];

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
    };

    const handleBackToJobs = () => {
        setSelectedJob(null);
    };

    // Function to handle "Show More" button click
    const handleShowMore = () => {
        setVisibleJobsCount((prevCount) => prevCount + 5); // Load 5 more jobs each time
    };

    return (
        <div className="job-page-container">
            {selectedJob ? (
                <CVSubmission jobTitle={selectedJob} onBack={handleBackToJobs} />
            ) : (
                <div>
                    <header>
                        <h1 className="job-page-title">Job Offers</h1>
                        <p className="job-intro">
                            Explore a selection of career opportunities that match your skills and ambitions. Find the job that suits you!
                        </p>
                    </header>

                    <div className="job-list">
                        {jobs.slice(0, visibleJobsCount).map((job) => (
                            <div key={job.id} className="job-card">
                                <h2>{job.title}</h2>
                                <p className="company">{job.company}</p>
                                <p className="location">{job.location}</p>
                                <p className="description">{job.description}</p>
                                <button
                                    onClick={() => handleApplyClick(job.title)}
                                    className="apply-button"
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    {visibleJobsCount < jobs.length && (
                        <button onClick={handleShowMore} className="show-more-button">
                            Show More Jobs
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Jobs;
