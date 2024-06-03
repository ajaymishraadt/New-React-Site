import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">    {/* ======= Header ======= */}
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to={`/`}>Alphadot<span>.</span></Link></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <Link to={`/`}"index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></Link>*/}
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto" to={`/`}>Home</Link></li>
                            <li className="dropdown"><Link to={`/services`}><span>Services</span> <i className="bi bi-chevron-down" /></Link>
                                <ul>
                                    <li><Link to={`/appDevelopment`}>Application Development</Link></li>
                                    <li><Link to={`/cloudTransform`}>Technology Consulting</Link></li>
                                    <li><Link to={`/techConsult`}>Cloud Transformation</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto " to={`/career`}>Career</Link></li>
                            {/* <li><Link className="nav-link scrollto" to={`/aboutus`}>About</Link></li> */}

                            <li className="dropdown"><Link to={`/aboutus`}><span>About</span> <i className="bi bi-chevron-down" /></Link>
                                <ul>
                                    <li><Link to={`/testimonials`}>Testimonials</Link></li>
                               
                                </ul>
                            </li>
                                
                            <li><Link className="nav-link scrollto" to={`/contactus`}>Contact Us</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div> {/* End Header */}
            </header>
        </div>
    )
}
