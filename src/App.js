import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const App = () => {
  return (
    <div>
      <header>
        <nav >
          <ul>
            <li>
              <Link to="/" >
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
        <p>Necklaces, rings, earrings, etc.</p>
      </div>
    </div>
  );
};

export default App;
