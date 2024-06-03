import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../Component/Testimonial";
export default function AboutUs() {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>Mastering The Art Of Possible</h3>
                <p>
                  AlphaDot is a pioneering Software Engineering and IT
                  consultancy aiming to turn ideas into business value. They use
                  their expertise and technology know-how to create flawless
                  digital solutions for clients, partners, and communities.{" "}
                </p>
                <p>
                  {" "}
                  They focus on full stack app development, cloud
                  transformation, and DevOps automation. AlphaDot's mission is
                  to excel in the "art of possible," guiding your journey from
                  strategy to execution in Software Engineering and Digital
                  Transformation.
                </p>
                <Link to={`/Contactus`} className="about-btn">
                  <span>Contact us</span> <i className="bx bx-chevron-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-receipt" />
                    <h4>Application Development</h4>
                    <p>
                      We are passionate about building top quality software
                      applications. Our dedicated development teams are experts
                      in numerous technology stacks.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bx bx-cube-alt" />
                    <h4>Technology Consulting</h4>
                    <p>
                      With technology being critical in driving today's
                      corporate strategy and ensuring its success, leaders are
                      relying more and more on leveraging cutting edge
                      technologies.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="bx bx-images" />
                    <h4>Cloud Transformation</h4>
                    <p>
                      As the businesses move towards 'IT as a service', cloud
                      presence is an important aspect of overall IT strategy for
                      them and plays a key role in maximizing business value for
                      their enterprise.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
          {/* <!-- Team Section --> */}
        </div>
      </section>


      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="social">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={200}>
                <div className="member-img">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="social">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={300}>
                <div className="member-img">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="social">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={400}>
                <div className="member-img">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="social">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

  

      {/* End About Section */}
    </div>
  );
}
