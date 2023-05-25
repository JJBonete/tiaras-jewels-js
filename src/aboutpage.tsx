import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <html>
      <head>
        <title>About Us</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <style>
          {`
          /* CSS styles specific to this page */
          /* Add your own custom styles here */
          `}
        </style>
      </head>
      <body>
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
          <p>Tiara's Jewels is a Gensan-based shop that sells quality jewelry at an affordable price.</p>
        </section>

        <section id="team">
          <h2>Our Team</h2>
          {/* Display team members with their names, positions, and descriptions */}
          <div className="team-member">
            <img src="images/quennie.jpg" width="200" height="270" />
            <h3>Quennie Rose Ranes</h3>
            <p>CEO of Tiara's Jewels</p>
            <p>
              “As for me, I love jewelry, accessories in general so I decided to start a business that reflects my personal interest in what I am selling. It feels like I am a child having playtime with what I am doing, less hassle. Our products are affordable stainless-steel jewelry. I have necklaces, bracelets, and rings. We usually select stainless steel to have long-lasting and budget-friendly accessories.”
            </p>
          </div>
          <br />
          <div className="team-member">
            <img src="images/chacha.jpg" width="200" height="270" />
            <h3>Chacha Maria Danay</h3>
            <p>Bachelor of Arts in English Language Studies Student</p>
          </div>
          <br />
          <div className="team-member">
            <img src="images/ayessa.jpg" width="200" height="270" />
            <h3>Ayessa Bon</h3>
            <p>Bachelor of Arts in English Language Studies Student</p>
          </div>
          <br />
          <div className="team-member">
            <img src="images/hannah.JPG" width="200" height="270" />
            <h3>Hannah Custodio</h3>
            <p>Bachelor of Arts in English Language Studies Student</p>
          </div>
          <br />
          <div className="team-member">
            <img src="images/febilyn.jpg" width="200" height="270" />
            <h3>Febilyn Arroza</h3>
            <p>Bachelor of Arts in English Language Studies Student</p>
          </div>
          <br />
          <div className="team-member">
            <img src="images/daniela.JPG" width="200" height="270" />
            <h3>Daniela Jane Cosip</h3>
            <p>Bachelor of Arts in English Language Studies Student</p>
          </div>
          {/* Add more team members as needed */}
        </section>
      </body>
    </html>
  );
};

export default AboutUs;
