import React, { useState } from "react";
import "./jobs.css";
import CVSubmission from "./CVSubmission";

const Jobs = ({ jobs }) => {
    const [visibleJobsCount, setVisibleJobsCount] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedJob, setSelectedJob] = useState(null);

    const handleLoadMore = () => {
        setVisibleJobsCount((prevCount) => prevCount + 5);
    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Afficher le formulaire de CVSubmission si un job est sélectionné
    if (selectedJob) {
        return (
            <CVSubmission 
                jobTitle={selectedJob.title} 
                onBack={() => setSelectedJob(null)} 
            />
        );
    }

    return (
        <div className="jobs-container">
            <h1 className="jobs-title">Available Job Offers</h1>

            <input
                type="text"
                className="search-bar"
                placeholder="Search jobs by title, company, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="job-list">
                {filteredJobs.slice(0, visibleJobsCount).map((job) => (
                    <div key={job.id} className="job-card">
                        <div className="job-logo">
                            <img
                                src={job.logo || "https://via.placeholder.com/80"}
                                alt={`${job.company} logo`}
                            />
                        </div>
                        <div className="job-content">
                            <h2>{job.title}</h2>
                            <p className="company">{job.company}</p>
                            <p className="location">{job.location}</p>
                            <p className="description">{job.description}</p>
                            {/* Bouton pour soumettre un CV */}
                            <button 
                                className="apply-button" 
                                onClick={() => setSelectedJob(job)}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {visibleJobsCount < filteredJobs.length && (
                <button className="load-more-button" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default Jobs;
