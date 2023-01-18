import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Navigation from './components/navigation';
import AboutMe from './components/about_me';
import Contact from './components/contact';
import Project from './components/project';
import Resume from './components/resume';
import React, { useState } from "react";


function App() {

  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;

  }

  return (
    <div className="App">
      <Header className="App-header" currentPage={currentPage} setCurrentPage={setCurrentPage}></Header> 

          
     
      {renderPage()}

      <Footer></Footer>
    </div>
  );
}

export default App;
