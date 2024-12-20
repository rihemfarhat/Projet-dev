import React, { useState } from "react";
import photosiwar from "./466136565_1944508939392539_2051344454061946534_n.jpg";
import photorihem from "./466147098_3885260248459973_7716121273480716983_n.jpg";
import jobImage from "./job.png"; // Exemple d'image pour les offres d'emploi
import toolsImage from "./events.png"; // Exemple d'image pour les outils
import rolesImage from "./cv.png"; // Exemple d'image pour les rôles professionnels
import "./AboutUs.css";

function AboutUs() {
    const [activeFounder, setActiveFounder] = useState(null);

    const toggleDescription = (founder) => {
        setActiveFounder(activeFounder === founder ? null : founder);
    };
    
    return (
        <div className="about-us">
            {/* Section 1: Who Are We */}
            <section className="section who-are-we">
            <div className="image">
                    <img src="startup.png" alt="Startup Illustration" />
                </div>
                <div className="content">
                    <h2>Who Are We</h2>
                    <p>
                        We are a dynamic platform dedicated to bridging the gap between startups 
                        and talented professionals. Our mission is to empower innovation and creativity 
                        by connecting startups with the right resources, tools, and people to thrive in today’s 
                        competitive landscape.
                    </p>
                </div>
               
            </section>

            


            {/* Section 3: What We Do */}
            <section className="section what-we-do">
                <h2>What We Do</h2>
                <div className="what-we-do-grid">
                    <div className="action-card">
                        <img src={jobImage} alt="Job Opportunities" />
                        <p>
                            <strong>Opportunities for Students and Professionals:</strong> 
                            Our platform connects students, engineers, and technicians with job openings in innovative startups. 
                            Apply easily and find your place in the startup ecosystem.
                        </p>
                    </div>
                    <div className="action-card">
                        <img src={toolsImage} alt="Startup Tools" />
                        <p>
                            <strong>Discover Startup Events:</strong> 
                            We provide a curated list of events organized by startups, 
                            giving you the chance to network, learn, and participate in exciting opportunities.
                        </p>
                    </div>
                    <div className="action-card">
                        <img src={rolesImage} alt="Explore Roles" />
                        <p>
                        <p>
                            <strong>Career Guidance:</strong> 
                            Learn how to craft an impressive CV and ace your interviews with our expert tips, 
                            ensuring you're fully prepared to land your dream job in the startup world.
                        </p>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section questions">
  
  <div className="questions-list">
    <h2>Frequently Asked Questions</h2>
    <div className="question-item">
      <h3 className="question">How do I apply for a job on your platform?</h3>
      <p className="answer">
        To apply for a job, you must first register on our platform. Once registered, you can browse the job
        listings and apply directly through the online form.
      </p>
    </div>

    <div className="question-item">
      <h3 className="question">How can I register for an event?</h3>
      <p className="answer">
        To register for an event, go to the "Events" section and click on the event of your choice. You will
        find a registration button to sign up directly.
      </p>
    </div>

    <div className="question-item">
      <h3 className="question">Is the service free?</h3>
      <p className="answer">
        Yes, registration on the platform and participation in events are completely free of charge.
      </p>
    </div>
  </div>
</section>


        
            
            <section className="section founders">
                <h2>The Minds Behind the Platform</h2>
                <div className="founders-grid">
                    <div
                        className={`founder-card ${activeFounder === "rihem" ? "active" : ""}`}
                        onClick={() => toggleDescription("rihem")}
                    >
                        <h6>Rihem Farhat - Co-Founder</h6>

                        <img src={photorihem} alt="Rihem Farhat" />
                        <div className="description">
                            Rihem Farhat is an engineer from Telecom Supcom, with a passion for technology 
                            and innovation. She has played a key role in developing and leading projects 
                            within the startup ecosystem.
                        </div>
                    </div>
                    <div
                        className={`founder-card ${activeFounder === "siwar" ? "active" : ""}`}
                        onClick={() => toggleDescription("siwar")}
                    >
                        <h6>Siwar Ben Ammar - Co-Founder</h6>

                        <img src={photosiwar} alt="Siwar Ben Ammar" />
                        <div className="description">
                            Siwar Ben Ammar is an engineer from Telecom Supcom, specializing in 
                            communication technologies. She is committed to promoting entrepreneurship 
                            and collaboration within the startup community.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
