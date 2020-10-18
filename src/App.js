import React from 'react';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';


function App() {
  const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }

  return (
    <div className="App">
      <Nav tabs={tabs} currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
