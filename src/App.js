import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/firstPage/navbar';
import BackImg from './components/firstPage/BackImg';
import Footer from './components/firstPage/Footer';
import AboutUs from './components/firstPage/about'
import ContactUs from './components/contactUs';
// import Home from  './components/home'
// import './components/home'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ServicesPage from '../src/components/firstPage/ServicesPage'; 
// import MainPage from './components/secondPage/Main';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackImg/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      
      {/* <Router>
        <Route path="/home" component={Home} />

      </Router> */}
      


    {/* <Router>
      <Routes>
          <Route path="../src/components/firstPage/ServicesPage" component={ServicesPage} />
      </Routes>
    </Router> */}
     
    </div>
  );
}

export default App;
