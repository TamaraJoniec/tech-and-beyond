import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Tech & Beyond</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Tech & Beyond is a passion project created by Mike and Tamara, a tech-loving couple who share a deep enthusiasm for development and digital
            experiences. What started as a way to document our learning journey has evolved into a platform where we share insights, tutorials, and experiences
            from our different perspectives in the tech world.
          </p>
        </div>

        <div className="about-section about-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Mike Lamprakis</h3>
              <p className="member-role">Backend Developer</p>
              <p>
                With several years of experience in backend development, Mike specializes in Java-based technologies and enterprise architecture. His passion
                lies in building robust, scalable systems and exploring cloud-native approaches to modern development challenges.
              </p>
            </div>

            <div className="team-member">
              <h3>Tamara Joniec</h3>
              <p className="member-role">Junior Frontend Developer</p>
              <p>
                Tamara is an enthusiastic frontend developer with a keen eye for design and user experience. Currently focused on mastering React and modern CSS
                techniques, she brings creative solutions to every project and enjoys bridging the gap between design and functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Tech & Beyond, we believe in making technology accessible and enjoyable for everyone. Our mission is to share our knowledge and experiences in a
            way that helps others on their development journey, whether they're beginners or seasoned professionals. We cover both frontend and backend topics,
            offering a holistic view of modern web development.
          </p>
        </div>

        <div className="about-section">
          <h2>Join Our Journey</h2>
          <p>
            We're constantly learning and growing in this ever-evolving field, and we invite you to join us. Whether you're interested in frontend design
            principles, backend architecture, or the intersection of both, Tech & Beyond has something for you. Connect with us, share your thoughts, and be
            part of our development community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
