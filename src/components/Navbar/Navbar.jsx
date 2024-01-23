import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div className="logo">Лого</div>
    <ul>
      <li><Link to="/services">Услуги</Link></li>
      <li><Link to="/">О нас</Link></li>
      <li><Link to="/contact">Контакты</Link></li>
    </ul>
  </nav>
);

export default Navbar;