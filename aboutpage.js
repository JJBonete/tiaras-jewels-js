import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li style={{ alignContent: 'right' }}>
              <a href="index.html">
                <img src="images/homepage.png" alt="homepage" width="200" height="100" />
              </a>
            </li>
            <li>
              <a href="aboutpage.html">
                <img src="images/aboutpage.png" alt="aboutpage" width="120" height="60" />
              </a>
            </li>
            <li>
              <a href="productpage.html">
                <img src="images/productpage.png" alt="productpage" width="120" height="60" />
              </a>
            </li>
            <li>
              <a href="accountpage.html">
                <img src="images/accountpage.png" alt="accountpage" width="120" height="60" />
              </a>
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
          <p>Bachelor of Arts in English Language Studies
