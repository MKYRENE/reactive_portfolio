//function component Footer
function Footer(propsObj) {
  const date =new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>&copy; {year}</p>
      <p>Dev'd & Build & Design by Michael Rodriguez</p>
    </footer>
  )
}
// Export the Footer component so it can be used in other files
export default Footer;

