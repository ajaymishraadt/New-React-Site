import React from 'react'

export default function Carrer() {
    return (
        <>
            <section id="testimonials" className="testimonials container mt-5" >
                <div className="section-title mt-5">
                    <h2>Career</h2>
                    <p>Work at AlphaDot Technologies </p>
                </div>
                <div className="row">
                    <div className="testimonial-wrap col-lg-4 ">
                        <div className="testimonial-item text-center" >
                            <h2 >Java Developer</h2>
                            <p>3-5 Years</p>
                            <p>Indore</p>
                        </div>
                    </div>
                    <div className="testimonial-wrap col-lg-4">
                        <div className="testimonial-item  text-center ">
                            <h2 >Java Developer-Intern</h2>
                            <p>0-1 Year</p>
                            <p>Indore</p>
                        </div>
                    </div>
                    <div className="testimonial-wrap col-lg-4">
                        <div className="testimonial-item  text-center">
                            <h2 >MERN-Developer</h2>
                            <p>3-5 years</p>
                            <p>Indore</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact mt-5">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Submit Application</h2>
                        <h4>Our team will contact you after reviewing your resume</h4>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-lg-7">
                            <form  className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                    <label  for="exampleFormControlInput1">Your name </label>
                                        <input type="text" name="name" className="form-control" id="name"  required />
                                    </div>
                                    <div className="col form-group">
                                    <label for="exampleFormControlInput1">Your email </label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                    <label for="exampleFormControlInput1">Phone number</label>
                                        <input type="text" name="mobile" className="form-control" id="mobile"  required />
                                    </div>
                                    <div className="col form-group">
                                    <label for="exampleFormControlInput1">Job application for</label>
                                        <input type="text" className="form-control" name="jobapplicationfor" id="jobapplicationfor"  required />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                    <label for="exampleFormControlSelect1">Job-type</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Internship">Internship</option>
                                        </select>
                                    </div>
                                    <div className="col form-group">
                                    <label    for="exampleFormControlSelect1">Upload-resume</label>
                                        <input type="file" name="uploadResume" className="form-control-file" id="uploadResume" required />
                                    </div>
                                </div>
                                <div className="text-center"><button type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
