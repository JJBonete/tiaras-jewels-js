import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const AccountPage = () => {
  return (
    <div>
      <header>
        <nav>
        <ul>
            <li>
              <Link to="/">
                <img src="./images/homepage.png" alt="Homepage" width="200" height="100" />
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
};

export default AccountPage;
