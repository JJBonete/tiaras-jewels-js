import React from 'react';
import './styles.css';

function AccountPage() {
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

      <section id="account-info">
        <h1>My Account</h1>
        <div className="user-info">
          <p>Name: Ayessa</p>
          <p>Email: ayessabon@gmail.com</p>
          <p>Address: Carmenville, Calumpang, General Santos City</p>
        </div>
        <br />
        <div className="order-history">
          <h2>Order History</h2>
          {/* Display order details, such as order number, date, and status */}
          <div className="order">
            <p>Order Number: 123456</p>
            <p>Date: May 10, 2023</p>
            <p>Status: Delivered</p>
          </div>
          <div className="order">
            <p>Order Number: 789012</p>
            <p>Date: April 25, 2023</p>
            <p>Status: Shipped</p>
          </div>
          {/* Add more order history entries as needed */}
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
