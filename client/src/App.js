import Header from './components/Header';


function App() {

  const count = 10


  return (
    <>
      <header>
        <h3>Logo</h3>
        <nav>
          <a href ="#">Home</a>
          <a href ="#">About Me</a>
          <a href ="#">Portfolio</a>
          <a href ="#">Contact</a>

        </nav>
        <p>Count: {count}</p>
      </header>
    </>
  );
}

export default App;
