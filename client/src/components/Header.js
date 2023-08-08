// Define the Header component
function Header(propsObj) {
  console.log(propsObj)
  // Return JSX for the header section
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
        <h3>{propsObj.name}</h3>
      </nav>
    </header>
  )
}

// Export the Header component so it can be used in other files
export default Header;
