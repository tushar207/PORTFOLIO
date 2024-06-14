import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Service() {
  return (
    <>
    <Header/>
    <section id="service" className="section">
  <div className="container text-center">
    <h6 className="subtitle">Service</h6>
    <h6 className="section-title mb-4">What I Do</h6>
    <p className="mb-5 pb-4">a recent graduate passionate about front-end development. My skills include HTML, CSS, and JavaScript.<br/>I’m excited to create user-friendly interfaces and contribute to innovative projects.</p>
    <div className="row">
      <div className="col-sm-6 col-md-3 mb-4">
        <div className="custom-card card border">
          <div className="card-body">
            <i className="icon ti-crown" />
            <h5>User Interface</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3 mb-4">
        <div className="custom-card card border">
          <div className="card-body">
            <i className="icon ti-desktop" />
            <h5>Web Development</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3 mb-4">
        <div className="custom-card card border">
          <div className="card-body">
            <i className="icon ti-mobile" />
            <h5>Responsive Design</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3 mb-4">
        <div className="custom-card card border">
          <div className="card-body">
            <i className="icon ti-bar-chart" />
            <h5>SEO</h5>
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

export default Service