import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Projects() {
  return (
    <>
    <Header/>
    <section id="portfolio" className="section">
  <div className="container text-center">
    <h6 className="subtitle">Portfolio</h6>
    <h6 className="section-title mb-4">Check My Wonderful Works</h6>
    <p className="mb-5 pb-4">Check out my portfolio showcasing a clone website and a React.js with CRUD -based  appointment booking system. <br/>These projects exemplify my proficiency in frontend development and data management.<br/> Let's connect to discuss these projects further!</p>
    <div className="row">
      <div className="col-sm-4">
        <div className="img-wrapper">
          <img src="assets/imgs/Zudio.png" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Zudio Clone</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="https://github.com/tushar207/PROJECT/tree/main/Zudio"><i className="ti-link" /></a>
            </div>  
          </div>
        </div>
        <div className="img-wrapper">
          <img src="assets/imgs/folio-2.jpg" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Dmart Clone</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="javascript:void(0)"><i className="ti-link" /></a>
            </div>                              
          </div>
        </div>                  
      </div>
      <div className="col-sm-4">
        <div className="img-wrapper">
          <img src="assets/imgs/folio-3.jpg" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Project Title</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="javascript:void(0)"><i className="ti-link" /></a>
            </div>  
          </div>
        </div>
        <div className="img-wrapper">
          <img src="assets/imgs/folio-4.jpg" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Appointment Booking System</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="javascript:void(0)"><i className="ti-link" /></a>
            </div>                              
          </div>
        </div>                  
      </div>
      <div className="col-sm-4">
        <div className="img-wrapper">
          <img src="assets/imgs/Dmart.png" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Dmart Clone</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="https://github.com/tushar207/PROJECT/tree/main/Dmart"><i className="ti-link" /></a>
            </div>  
          </div>
        </div>
        <div className="img-wrapper">
          <img src="assets/imgs/folio-6.jpg" alt />
          <div className="overlay">
            <div className="overlay-infos">
              <h5>Project Title</h5>
              <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
              <a href="javascript:void(0)"><i className="ti-link" /></a>
            </div>                              
          </div>
        </div>                  
      </div>
    </div>
  </div>
</section>

<Footer/>

    </>
  )
}

export default Projects