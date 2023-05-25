import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <div>
      <header>
        <nav>
        <ul>
            <li>
              <Link to="/">
                <img src="/images/homepage.png" alt="Homepage" width="200" height="100" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="/images/aboutpage.png" alt="About Page" width="120" height="60" />
              </Link>
            </li>
            <li>
              <Link to="/product">
                <img src="/images/productpage.png" alt="Product Page" width="120" height="60" />
              </Link>
            </li>
            <li>
              <Link to="/account">
                <img src="/images/accountpage.png" alt="Account Page" width="120" height="60" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <h1>About Us</h1>
        <p>Tiara's Jewels is a Gensan-based shop that sells quality jewelries at an affordable price.</p>
      </section>

      <section id="team">
        <h2>Our Team</h2>
        {/* Display team members with their names, positions, and descriptions */}
        <div className="team-member">
          <img src="images/quennie.jpg" width="200" height="270" alt="Quennie Rose Ranes" />
          <h3>Quennie Rose Ranes</h3>
          <p>CEO of Tiara's Jewels</p>
          <p>
            “As for me, I love jewelries, accessories in general so I decided to start a business that reflects my
            personal interest to what I am selling. It feels like I am a child having playtime with what I am doing,
            less hassle. Our products are affordable stainless-steel jewelry, I have necklace, bracelets and rings. We
            usually select stainless steel to have a long-lasting and budget friendly accessories.”
          </p>
        </div>
        <br />
        <div className="team-member">
          <img src="images/chacha.jpg" width="200" height="270" alt="Chacha Maria Danay" />
          <h3>Chacha Maria Danay</h3>
          <p>Bachelor of Arts in English Language Studies Student</p>
        </div>
        <br />
        <div className="team-member">
          <img src="images/ayessa.jpg" width="200" height="270" alt="Ayessa Bon" />
          <h3>Ayessa Bon</h3>
          <p>Bachelor of Arts in English Language Studies Student</p>
        </div>
        <br />
        <div className="team-member">
          <img src="images/hannah.JPG" width="200" height="270" alt="Hannah Custodio" />
          <h3>Hannah Custodio</h3>
          <p>Bachelor of Arts in English Language Studies Student</p>
        </div>
        <br />
        <div className="team-member">
          <img src="images/febilyn.jpg" width="200" height="270" alt="Febilyn Arroza" />
          <h3>Febilyn Arroza</h3>
          <p>Bachelor of Arts in English Language Studies Student</p>
        </div>
        <br />
        <div className="team-member">
          <img src="images/daniela.JPG" width="200" height="270" alt="Daniela Jane Cosip" />
          <h3>Daniela Jane Cosip</h3>
          <p>Bachelor of Arts in English Language Studies Student</p>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
  );
};

export default AboutPage;
