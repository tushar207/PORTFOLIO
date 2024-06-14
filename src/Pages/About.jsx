import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function About() {
  return (
   <>
   <Header/>
   <section id="about" className="section mt-3">
  <div className="container mt-5">
    <div className="row text-center text-md-left">
      <div className="col-md-3">
        <img src="assets/imgs/Avtar.jpg" alt className="img-thumbnail mb-4" />
      </div>
      <div className="pl-md-4 col-md-9">
        <h6 className="title">Tushar Makavana</h6>
        <p className="subtitle">Frontend Developer</p>
        <p>Aspiring Front End Developer with a passion for creating elegant and responsive web interfaces. Proficient in HTML, CSS, and JavaScript. Collaborated on a team project to redesign a Appointment booking System website, resulting in a 20% increase in user engagement. Eager to contribute creativity and problem-solving skills to a dynamic development team.</p>
        <a  href="assets/Tushar Resume.pdf" className="btn btn-primary rounded">DOWNLOAD CV</a>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="container text-center">
    <h3 className="subtitle">Skills</h3>
    <h6 className="section-title mb-4">Why Choose me</h6>
    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
    <div className="row text-left">
      <div className="col-sm-6">
        <h6 className="mb-3">HTML / HTML5</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '98%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h6 className="mb-3">CSS / CSS3</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '94%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>94%</span></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h6 className="mb-3">JAVASCRIPT</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '94%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>94%</span></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h6 className="mb-3">BOOSTRAP</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '99%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>99%</span></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h6 className="mb-3">REACT.JS</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>95%</span></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h6 className="mb-3">REDUX</h6>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '91%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>91%</span></div>
        </div>
      </div>
    </div>  
  </div>
</section>
<Footer/>

   </>
  )
}

export default About