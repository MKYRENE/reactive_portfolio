//Importing Components 
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'

//Importing Pages
import Main from './pages/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


function App() {
  const count = 10;
  const name = 'mr';

  return (
    <>
      <Header count={count} name={name} />
      <Routes>
        {/* CREATING ROUTES  */}
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App;

//use react router to remove Main from other pages Main should only be shown 