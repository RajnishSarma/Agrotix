import React from 'react';
import './BackImg.css';
import backgroundImage from '../images/pic3.jpg';
import { Link as LinkRoll,Button } from 'react-scroll';
// import MainPage from '../secondPage/Main';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import "../secondPage/Main"



const BackImg = () => {

  const rediectMeToMOdelPage2 = () => {
          window.location.replace('https://croppy-5jfybdjr2pmtedzo5k4etx.streamlit.app/');
  }

  const rediectMeToMOdelPage1 = () => {
    window.location.replace('https://plant-disease-classification-seven.vercel.app/');
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120vh',
      }}
    >
      <div className='imgsection'>
        
        <div className='imgtext'>
          <h2 className='intro'><b>YOUR CROP DOCTOR</b></h2>
        </div>
        <div className='imgtext'>
          <p className='middle'>Crop disease detection made easy <br />Join Us Today!</p>
        </div>
      </div>
      <p className='text1'>Empowering Agriculture Through Precision Detection and Timely Solutions <br />
        <LinkRoll to=""><Button onClick={rediectMeToMOdelPage1}>Disease Prediction</Button></LinkRoll> <br />
        <LinkRoll to=""><Button onClick={rediectMeToMOdelPage2}>Crops prediction</Button></LinkRoll>
      </p>
      {/* <Router>
        <Routes>
          <Route path="/secondPage/mmain" element={<MainPage />} />
        </Routes>
      </Router> */}

     {/* <Link to="/secondPage/Main"><button>Main</button></Link> */}

             {/* <Router>
                <div>
                  <nav>
                   
                    <ul>
                      <li>
                        <Link to="/secondPage/Main">Main</Link>
                      </li>
                    </ul>
                  </nav>
          
                
                  <Routes>
                    <Route exact path="/" element={<BackImg />} /> 
                    <Route exact path="/secondPage/Main" element={<MainPage />} />
                  </Routes> 
                </div>
              </Router> */}






    </div>
  );
};

export default BackImg;