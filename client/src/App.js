import { useState } from 'react';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  const [page, setPage] = useState('main');

  const handlePageView = () => {

    switch (page) {
      case 'contact':
        return <Contact />;
        case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      default:
        return <Main />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />

      {handlePageView()}

      <Footer />
    </>
  );
}

export default App;