import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
