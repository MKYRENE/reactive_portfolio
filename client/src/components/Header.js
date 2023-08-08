// Import React to use JSX syntax
import React from 'react';

// Define the Header component
function Header() {
  // Return JSX for the header section
  return (
    <header>
      {/* Display a logo or title */}
      <h3>Logo</h3>
      {/* Navigation links */}
      <nav>
        {/* Each link represents a different section */}
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </nav>
    </header>
  );
}

// Export the Header component so it can be used in other files
export default Header();
