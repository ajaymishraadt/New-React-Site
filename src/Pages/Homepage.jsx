import React from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

export default function Homepage() {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <div className="row">
            <div className="col-xl-6">
              <h1>Mastering the art of Possible.</h1>
              <h2>
                We offer customized services for both startups and established companies,
                ranging from enterprise software development to augmenting your team
                with our skilled in-house staff, helping you set up projects quickly
                based on your needs.
              </h2>
              <Link to={'./contactus'} className="btn-get-started scrollto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        <div className="py-5 service-7">
          <div className="container">
            {/* Row  */}
            <div className="row">
              {/* Column */}
              <div className="col-md-4 mb-4">
                <div className>
                  <img className="rounded img-fluid" src="assets/img/clients/app-dev-img.jpg" alt="wrappixel kit" />
                  <div className="mt-4">
                    <h6 className="font-weight-medium">Application Development</h6>
                    <p className="mt-3">We are passionate about building top quality software applications. Our dedicated development
                      teams are experts in numerous technology stacks. They serve as specialists in converting creative ideas into robust
                      and impactful applications. By leveraging the agile methodology, our customers benefit from shortened development
                      lifecycles and faster </p>
                    <a href="javascript:void(0)" className="linking">Read More</a>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="col-md-4 mb-4">
                <div className>
                  <img className="rounded img-fluid" src="assets/img/clients/tech_consult_img.jpeg" alt="wrappixel kit" />
                  <div className="mt-4">
                    <h6 className="font-weight-medium">Technology Consulting</h6>
                    <p className="mt-3">With technology being critical in driving today's corporate strategy and ensuring its success,
                      leaders are relying more and more on leveraging cutting edge technologies, digital transformation and process
                      optimization to achieve business goals. But technology investments
                      don’t always achieve the expected benefits, and companies are finding that </p>
                    <a href="javascript:void(0)" className="linking">Read More</a>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="col-md-4 mb-4">
                <div className>
                  <img className="rounded img-fluid" src="assets/img/clients/cloud_img.jpeg" alt="wrappixel kit" />
                  <div className="mt-4">
                    <h6 className="font-weight-medium">Cloud Transformation</h6>
                    <p className="mt-3">As the businesses move towards 'IT as a service', cloud presence is an important aspect of
                      overall IT strategy for them and plays a key role in maximizing business value for their enterprise. Considering
                      the complexity and diversity of available
                      cloud  options including private  cloud, public cloud, and  hybrid cloud, it  is </p>
                    <a href="javascript:void(0)" className="linking">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-4 font-weight-bold">Technologies We Use</h3>
        <section id="clients" className="clients">
          <div className="container">
            <div className="row">
              <div className="col-sm pb-3">
                <img src="assets/img/clients/angularjs.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/atom.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/bootstrap.png" className="img-fluid" alt="Error in loading img" />
                
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/django.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/dotnet.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/flutter.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-2">
                <img src="assets/img/clients/java.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/kotlin.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-2">
                <img src="assets/img/clients/laravel.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/nodejs.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/php.png" className="img-fluid" alt="Error in loading img" />
              </div>
              <div className="col-sm pb-3">
                <img src="assets/img/clients/python.png" className="img-fluid" alt="Error in loading img" />
              </div>
            </div>
          </div>
        </section>
        <section id="counts" class="counts">
          <div class="container aos-init aos-animate" data-aos="fade-up">

            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>

                  <CountUp start={0} end={232} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp><p>Happy Clients</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <CountUp start={0} end={521} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp><p>Projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="bi bi-headset"></i>
                  <CountUp start={0} end={1463} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp><p>Hours Of Support</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="bi bi-people"></i>
                  <CountUp start={0} end={25} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp><p>Hard Workers</p>
                </div>
              </div>

            </div>

          </div>
        </section>


      </main>
    </div>
  );
}
