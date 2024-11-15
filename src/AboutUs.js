import React from "react";
import photosiwar from "./466136565_1944508939392539_2051344454061946534_n.jpg";
import photorihem from "./466147098_3885260248459973_7716121273480716983_n.jpg";

function AboutUs() {
    return (
        <div className="about-us">
            <h2>Who Are We</h2>
            <p>
                We are a dynamic platform dedicated to bridging the gap between startups and talented professionals. Our mission is to empower innovation and creativity by connecting startups with the right resources, tools, and people to thrive in today’s competitive landscape.
            </p>
            <h2>Our Mission</h2>
            <p>
                To create an ecosystem where startups can grow and succeed by finding the talent they need and fostering meaningful collaborations. We aim to simplify the recruitment process, making it easier for companies to focus on what truly matters: their vision.
            </p>
            <h2>What We Do</h2>
            <ul>
                <li>A curated list of job opportunities in the startup world.</li>
                <li>Tools for startups to showcase their culture and values.</li>
                <li>A user-friendly interface for professionals to explore exciting roles that align with their skills and passions.</li>
            </ul>
            <h2>Our Values</h2>
            <ul>
                <li><strong>Innovation:</strong> We celebrate creativity and fresh ideas.</li>
                <li><strong>Collaboration:</strong> We believe in the power of partnerships.</li>
                <li><strong>Empowerment:</strong> We support startups and professionals in achieving their goals.</li>
            </ul>
            <h2>Why Choose Us?</h2>
            <p>
                Whether you're a startup seeking talent or a professional looking for your next adventure, we are here to make the process seamless, efficient, and rewarding. Together, let’s build the future of innovation.
            </p>
            <h2>The Minds Behind the Platform</h2>
            <div className="founders">
                <div>
                    <img src={photorihem} alt="Rihem" />
                    <p>Rihem - Co-Founder</p>
                </div>
                <div>
                    <img src={photosiwar} alt="Siwar" />
                    <p>Siwar - Co-Founder</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
