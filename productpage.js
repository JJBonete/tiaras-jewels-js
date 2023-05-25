import React from 'react';
import './styles.css';

function ProductPage() {
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
}

export default ProductPage;
