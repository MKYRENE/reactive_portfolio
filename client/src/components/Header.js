// Import required dependencies
import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png"; // Update the path to your logo image

// Define the Header component
function Header(propsObj) {
  // Styles for navigation links
  const navLinkStyles = {
    color: 'white',
    fontWeight: 'bold',
  };

  // Return JSX for the Header component
  return (
    <header className="row justify-between align-center">
      {/* Logo image */}
      <img src={logoImage} alt="Logo" style={{ width: '100px', height: 'auto' }} />

      {/* Navigation links */}
      <nav className="nav-links">
        {/* Home link */}
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
        
        {/* Portfolio link */}
        <NavLink to="/portfolio" style={navLinkStyles}>Portfolio</NavLink>
        
        {/* About link */}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
        
        {/* Contact link */}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>
    </header>
  );
}

// Export the Header component
export default Header;
