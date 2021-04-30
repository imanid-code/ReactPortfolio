import React from "react";
import "./about.css";

const About = () => (
  <>
    <div className="about-card card">
      <div className="img-container">
        <img src={`${process.env.PUBLIC_URL}/assets/profilepic2.png`} alt="profile2" />
      </div>
      <div className="content">
        <p>
          As a Full Stack Web Developer, I am efficient in both the front and
          back end of web development. In addition to web development I can
          produce, engineer, analyze, program and design programs and websites.
          As a former math teacher I am proficient with numbers , equations ,
          arithmetic and geometry.{" "}
        </p>
      </div>
    </div>
    <div className="about-card card">
        <div className="img-container">
          <img src={`${process.env.PUBLIC_URL}/assets/unc.jpeg`} alt="unc" />
          <img src={`${process.env.PUBLIC_URL}/assets/uncc.jpeg`} alt="uncc" />
        </div>
        <div className="content">
          <p>
            I graduated with honors from The University of North Carolina at
            Charlotte. My degree is in Elementary Education and a minor in
            Spanish. I am currently studying to be a full stack Web Developer
            with The University of North Carolina at Chapel Hill.
          </p>
        </div>
      </div>
      
      <div className="about-card card">
        <div className="img-container">
          <img src={`${process.env.PUBLIC_URL}/assets/skills.png`} alt="skills" />
        </div>
        <div className="content">
          <ul class="card-text">
            <li>
              Computer Science applied to JavaScript (algorithms, efficiency,
              time complexity, big o notation, data structures)
            </li>
            <li>Database (MySQL, MongoDB)</li>
            <li>
              Server side development (node.js, Express, User Authentication,
              Progressive Web Application(PWAs) MERN stack(mongoDB, Express.jb.,
              react.js, node.js)
            </li>
            <li>
              Browser based technologies (HTML, CSS, JavaScript, jQuery,
              responsive design, Bootstrap, handlebars, local storage, session
              storage, indexedDB, react.js )
            </li>
            <li>API Interaction (api, json, ajax)</li>
            <li>
              Deployment/ command-line fundamentals (Heroku, Git, GitHub Pages)
            </li>
            <li>C# (ASP.Net)</li>
            <li>
              Quality Assurance ( Writing Tests, functional testing, linting,
              continuous integration)
            </li>
          </ul>
        </div>
      </div>
    
  </>
);
export default About;
