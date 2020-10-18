import React, {useState } from 'react';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const renderPage = () => {
    switch(currentTab) {
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        {renderPage()}
      </main>
    <Footer />
    </div>
  );
}

export default App;
