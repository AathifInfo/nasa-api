import React from 'react';
import './HomeNASA.css'; 
import marsTourImage from '../../images/marsTour.jpg';
import insightLanderImage from '../../images/insightLander.jpg';
import missionOverviewImage from '../../images/missionOverview.jpg';
import { Link } from 'react-router-dom';

function HomeNASA() {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Mission to Mars Started</h1>
          <p>
            NASA’s latest mission to Mars, InSight, is set to launch early Saturday morning in pursuit of a number of historic firsts. Its solar-powered lander will probe the surface of the planet.
          </p>
          <a href="#" className="btn-primary">Read More</a>
        </div>
      </header>
      <section className="section mars-tours">
        <h2>NASA Mars Mission Tours California</h2>
        <div className="section-content">
          <img src={marsTourImage} alt="Mars Tour" />
          <p>
            Scientists and engineers with NASA’s next mission to Mars will be touring California cities starting this month. NASA's InSight mission will be the first interplanetary launch.
          </p>
        </div>
        <a href="#" className="btn-primary">Learn More</a>
      </section>

      {/* NASA Insight */}
      <section className="section nasa-insight">
        <h2>NASA INSIGHT</h2>
        <div className="insight-grid">
          <div className="insight-item">
            <img src={insightLanderImage} alt="InSight Lander" />
            <div className="overlay-text">
              <h3>NASA's Related Articles</h3>
              <p>InSight, short for Interior Exploration...</p>
              <Link to="/display-nasa-image">
                Continue Reading
              </Link>
            </div>
          </div>
          <div className="insight-item">
            <img src={missionOverviewImage} alt="Mission Overview" />
            <div className="overlay-text">
              <h3>Mission Mars Overview</h3>
              <p>While in the bonded configuration...</p>
              <Link to="/display-rover" className="btn-secondary">
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mars Section */}
      <section className="section why-mars">
        <h2>Why Mars?</h2>
        <p>Mars is one of the most studied planets...</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Sample footer text</p>
      </footer>
    </div>
  );
}

export default HomeNASA;
