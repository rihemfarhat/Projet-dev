// JobList.js
import React from "react";

function JobList({ jobs, onApplyClick }) {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <div key={job.id} className="job-card">
                    <h2>{job.title}</h2>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.description}</p>
                    <button onClick={() => onApplyClick(job.title)}>Postuler</button>
                </div>
            ))}
        </div>
    );
}

export default JobList;
