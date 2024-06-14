import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Contact() {
  return (
    <>
    <Header/>
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

export default Contact