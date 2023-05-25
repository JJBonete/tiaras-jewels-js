import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const ProductPage = () => {
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

      <section id="product-details">
        <h1>Necklace</h1>
        <div className="product-image">
          <img src="images/necklaces.png" width="300" height="300" alt="Necklace" />
        </div>
        <div className="product-info">
          <p>Price: Php 100</p>
          <p>Color: Gold</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>
      <br />
      <section id="product-details">
        <h1>Earrings</h1>
        <div className="product-image">
          <img src="images/earrings.png" width="300" height="300" alt="Earrings" />
        </div>
        <div className="product-info">
          <p>Price: Php 100</p>
          <p>Color: Gold</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>
      <br />
      <section id="product-details">
        <h1>Rings</h1>
        <div className="product-image">
          <img src="images/rings.png" width="300" height="300" alt="Rings" />
        </div>
        <div className="product-info">
          <p>Price: Php 100</p>
          <p>Color: Gold</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
