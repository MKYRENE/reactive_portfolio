import { NavLink } from "react-router-dom";

function Header(propsObj) {
  const navLinkStyles = {
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>
      <nav className="nav-links">
        <NavLink to="/" style={{ color: 'red' }}>Home</NavLink>
        <NavLink to="/portfolio" style={{ color: 'red' }}>Portfolio</NavLink>
        <NavLink to="/about" style={{ color: 'red' }}>About</NavLink>
        <NavLink to="/contact" style={{ color: 'red' }}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;