import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Header/>
    {/* <Homepage /> */}
    <div className="f-heading">
      <h1>Who we are?</h1>
      <p>How we help you to scale your business?</p>
    </div>
    <Features/>
    <Services/>
    <Subscribe/>
    <Contact/>
   <Footer/>
    </>
  );
}

export default App;
