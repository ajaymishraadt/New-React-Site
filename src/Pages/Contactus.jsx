import React from 'react'

function ContactUs() {
  return (
    
<section id="contact" className="contact mt-5">  {/* ======= Contact Section ======= */}

  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>We are happy to answer your questions and get you acquainted with alphadot tech.</p>
    </div>
    <div className="row" data-aos="fade-up" data-aos-delay={50}>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-12">
            <div className="info-box">
              <i className="bx bx-map" />
              <p> Ground Floor, Left Wing, MPSEDC STP,Building,Indore,Electronic Complex,Sukhlia,Madhya Pradesh 452003</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box mt-4">
              <i className="bx bx-envelope" />
              <p>contact@alphadottech.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box mt-4">
              <i className="bx bx-phone-call" />
              <p>94068-27087</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>{/* End Contact Section */}
</section> 

  )
}

export default ContactUs
