import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <h1 className="logo">
          <Link to="/">NUTRITION</Link>
        </h1>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
