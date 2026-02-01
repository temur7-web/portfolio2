import { Link, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner'; // Banner'ni import qilamiz
import './Header.css';

function Header() {
<Banner/>
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="temur.png" alt="Temur Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/about">Men haqimda</Link></li>
          <li><Link to="/skills">Qobiliyatlarim</Link></li>
          <li><Link to="/projects">Loyihalar</Link></li>
          <li><Link to="/contact">Bog‘lanish</Link></li>
        </ul>
      </nav>

     
    </header>
  );
}

export default Header;
