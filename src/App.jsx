import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AboutUs from './Pages/Aboutus';
import Homepage from './Pages/Homepage';
import ContactUs from './Pages/Contactus';
import Career from './Component/Career';
import Testimonials from './Component/Testimonial';

import CloudTransform from './Pages/CloudTransform';
import TechConsult from './Pages/TechConsult';
import Services from './Pages/Services';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/career' element={<Career/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
       
        <Route path='/cloudTransform' element={<CloudTransform/>}/>
        <Route path='/techConsult' element={<TechConsult/>}/>
        <Route path='/services' element={<Services/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
