import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <Header/>
   <header className="header" id="home">
  <div className="container">
    <div className="infos">
      <h6 className="subtitle">hello,I'm</h6>
      <h6 className="title">Tushar Makavana</h6>
      <p>A frontend developer</p>
      <div className="buttons pt-3">
        <Link  to="/contact" className="btn btn-primary rounded">HIRE ME</Link>
        <a  href="assets/Tushar Resume.pdf" className="btn btn-info rounded">DOWNLOAD CV</a>
      </div>      
      <div className="socials mt-4">
        <a className="social-item" href="https://www.facebook.com/druvang.makavana.56?mibextid=ZbWKwL"><i className="ti-facebook" /></a>
        <a className="social-item" href="https://www.instagram.com/tusharr_207?igsh=aWR0dDRiMDV5NXFw)"><i className="ti-instagram" /></a>
        <a className="social-item" href="https://github.com/tushar207"><i className="ti-github" /></a>
        <a className="social-item" href="https://www.linkedin.com/in/makavana-tushar-b14a91181"><i className="ti-linkedin" /></a>
      </div>
    </div>              
    <div className="img-holder">
      <img src="assets/imgs/Avtar.jpg" alt />
    </div>      
  </div>  
  {/* Header-widget */}
  <div className="widget">
    <div className="widget-item">
      <h2>-</h2>
      <p>Happy Clients</p>
    </div>
    <div className="widget-item">
      <h2>3</h2>
      <p>Project Completed</p>
    </div>
    <div className="widget-item">
      <h2>-</h2>
      <p>Awards Won</p>
    </div>
  </div>
</header>
{/* End of Page Header */}


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

<section id="contact" className="position-relative section">
  <div className="container text-center">
    <h6 className="subtitle">Contact</h6>
    <h6 className="section-title mb-4">Get In Touch With Me</h6>
    <p className="mb-5 pb-4">Seeking frontend developers!<br/> With expertise in HTML, CSS, and JavaScript, I'm ready to tackle projects head-on. <br/>Let's build intuitive user interfaces and bring creativity to the digital world.<br/> Get in touch, and let's make something awesome!</p>
    <div className="contact text-left">
      <div className="form">
        <h6 className="subtitle">Available 24/7</h6>
        <h6 className="section-title mb-4">Get In Touch</h6>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <div className="form-group">
            <textarea name="contact-message" id cols={30} rows={5} className="form-control" placeholder="Message" defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
        </form>
      </div>
      <div className="contact-infos">
        <div className="item">
          <i className="ti-location-pin" />
          <div className>
            <h5>Location</h5>
            <p> 53, Surbhi Society, Near Bapasitaram Chowk,<br/>New naroda, Ahmedabad, 382345</p>
          </div>                          
        </div>
        <div className="item">
          <i className="ti-mobile" />
          <div>
            <h5>Phone Number</h5>
            <p>(+91) 9737675658</p>
          </div>                          
        </div>
        <div className="item">
          <i className="ti-email" />
          <div className="mb-0">
            <h5>Email Address</h5>
            <p>makavanatushar1999@gmail.com</p>
          </div>
        </div>
      </div>                  
    </div>
  </div>  
  <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12994.231995172091!2d72.65987273281252!3d23.04974591797008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718274140404!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>      
</section>
     <Footer/>
   </>
  )
}

export default Home