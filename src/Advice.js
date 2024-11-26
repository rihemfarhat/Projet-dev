import React from 'react';
import './App.css'; // Utilisez le CSS mis à jour

const AdviceBox = ({ title, children, icon }) => (
  <div className="advice-box">
    <div className="advice-icon">{icon}</div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const Advice = () => {
  return (
    <div className="Advice">
      <header className="advice-header">
        <h1>Career Advice: How to Build an Effective Resume</h1>
        <p>
          Wondering how to make a resume that stands out? You're in the right place! Here are some tips to guide you.
        </p>
      </header>

      <section className="advice-section">
        <AdviceBox
          title="Why Your Resume Matters"
          icon="📄"
        >
          <p>
            Your resume is your gateway to a great job. Showcase your career history, skills, and accomplishments to demonstrate you're the right fit.
          </p>
        </AdviceBox>

        <AdviceBox
          title="Use Resume Examples Effectively"
          icon="📝"
        >
          <ul>
            <li><strong>Customize templates:</strong> Tailor them to your skills and achievements.</li>
            <li><strong>Be unique:</strong> Avoid copying; use templates as inspiration.</li>
            <li><strong>Take inspiration:</strong> Borrow structure, but make it your own.</li>
          </ul>
        </AdviceBox>

        <AdviceBox
          title="Key Resume Sections"
          icon="📑"
        >
          <p>A winning resume should include:</p>
          <ul>
            <li>Contact Information</li>
            <li>Professional Summary</li>
            <li>Skills</li>
            <li>Work Experience</li>
            <li>Education</li>
            <li>Certifications and Awards</li>
          </ul>
        </AdviceBox>

        <AdviceBox
          title="The Importance of Networking"
          icon="🤝"
        >
          <p>
            Networking is key to finding hidden job opportunities. Attend industry events, join LinkedIn groups, and connect with professionals in your field. Many positions are filled through referrals, so don't underestimate the power of relationships!
          </p>
        </AdviceBox>

        <AdviceBox
          title="Ace Your Interviews"
          icon="🎤"
        >
          <ul>
            <li><strong>Research the company:</strong> Understand their values, mission, and recent achievements.</li>
            <li><strong>Practice common questions:</strong> Prepare answers to questions like "Tell me about yourself" or "What are your strengths and weaknesses?"</li>
            <li><strong>Dress appropriately:</strong> Choose attire that matches the company's culture.</li>
            <li><strong>Follow up:</strong> Send a thank-you email after the interview to express your gratitude and reinforce your interest.</li>
          </ul>
        </AdviceBox>

        <AdviceBox
          title="Stay Organized in Your Job Search"
          icon="📋"
        >
          <p>
            Keeping track of your applications and deadlines is crucial. Create a spreadsheet or use job-search tools to manage:
          </p>
          <ul>
            <li>Job titles and companies you've applied to</li>
            <li>Application deadlines</li>
            <li>Follow-up dates</li>
            <li>Interview schedules</li>
          </ul>
        </AdviceBox>

        <AdviceBox
          title="Upskilling and Continuous Learning"
          icon="📚"
        >
          <p>
            The job market is constantly evolving. Stay competitive by learning new skills. Explore online courses, certifications, or workshops in areas relevant to your career.
          </p>
          <ul>
            <li>Consider platforms like Coursera, Udemy, or LinkedIn Learning.</li>
            <li>Focus on in-demand skills like coding, project management, or data analysis.</li>
          </ul>
        </AdviceBox>
      </section>

      <div class="advice-footer">
        <h3>Good Luck with Your Job Search!</h3>
        <p>
          Crafting a great resume is just the beginning. Build strong connections, keep improving your skills, and maintain a positive mindset. You've got this!
        </p>
      </div>
    </div>
  );
};

export default Advice;
