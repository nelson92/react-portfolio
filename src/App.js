import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Navigation from './components/navigation';
import About_me from './components/about_me';
import Contact from './components/contact';
import Project from './components/project';


function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header> 

      <Footer></Footer>
    </div>
  );
}

export default App;
