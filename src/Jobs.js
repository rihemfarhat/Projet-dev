import React, { useState, useEffect } from "react";
import axios from "axios";
import "./jobs.css"; // Assurez-vous que les styles sont inclus
import CVSubmission from "./CVSubmission";
import JobSubmissionForm from "./JobSubmissionForm.js";

function Jobs() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [visibleJobsCount, setVisibleJobsCount] = useState(5);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddJobForm, setShowAddJobForm] = useState(false); // Nouveau état pour le formulaire

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/posts");
                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to load job data. Please try again later.");
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
    };

    const handleBackToJobs = () => {
        setSelectedJob(null);
    };

    const handleShowMore = () => {
        setVisibleJobsCount((prevCount) => prevCount + 5);
    };

    const handleAddJobClick = () => {
        setShowAddJobForm(true);
    };

    const handleCloseAddJobForm = () => {
        setShowAddJobForm(false);
    };

    const handleJobAdded = (newJob) => {
        setJobs((prevJobs) => [newJob, ...prevJobs]); // Ajouter le nouveau poste en haut de la liste
        setShowAddJobForm(false);
    };

    if (loading) {
        return <div>Loading jobs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="job-page-container">
            {selectedJob ? (
                <CVSubmission jobTitle={selectedJob} onBack={handleBackToJobs} />
            ) : showAddJobForm ? (
                <JobSubmissionForm onClose={handleCloseAddJobForm} onJobAdded={handleJobAdded} />
            ) : (
                <div>
                    <header>
                        <h1 className="job-page-title">Job Offers</h1>
                        <p className="job-intro">
                            Explore a selection of career opportunities that match your skills and ambitions. Find the job that suits you!
                        </p>
                        <button onClick={handleAddJobClick} className="add-job-button">
                            Ajouter un Post de Travail
                        </button>
                    </header>

                    <div className="job-list">
                        {jobs.slice(0, visibleJobsCount).map((job) => (
                            <div key={job._id} className="job-card">
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
