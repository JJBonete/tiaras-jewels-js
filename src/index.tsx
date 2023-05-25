import React from 'react';

const TiaraJewels: React.FC = () => {
  return (
    <html>
      <head>
        <title>Tiara's Jewels</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <style>
          {`
          /* CSS styles specific to this page */
          /* Add your own custom styles here */
          
          .search-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
          }

          .search-input {
            width: 300px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .search-button {
            padding: 10px 20px;
            margin-left: 10px;
            background-color: #B2908B;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .search-button:hover {
            background-color: #B2908B;
          }


          nav ul {
            list-style-type: none;
            display: flex;
            justify-content: center; /* Center the icons horizontally */
          }

          nav ul li:first-child {
            margin-right: auto; /* Push the remaining icons to the right */
          }

          nav ul li:not(:first-child) {
            margin-left: 2px; /* Add some spacing between the icons */
          }
          `}
        </style>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
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

        <section id="search-section">
          <h1>
            <span className="brand-name">Tiara's</span>
            <span className="product-name">Jewels</span>
          </h1>
          <div className="search-container">
            <input type="text" id="search-input" className="search-input" placeholder="Search for a product" />
            <button id="search-button" className="search-button">Search</button>
          </div>
        </section>

        <div className="footer">
          <a>necklace, rings, earrings, etc.</a>
        </div>
      </body>
    </html>
  );
};

export default TiaraJewels;
