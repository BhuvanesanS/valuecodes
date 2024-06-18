import React, { useEffect, useState, useCallback } from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import gymnImage from '../images/gymn.png';
import Video from '../images/bannervideo.mp4';
import agile from '../images/agiletech.png';
import retention from '../images/retention.png';
import onboarding from '../images/customer.png';
import project from '../images/completed-task.png';
import confidential from '../images/confidential.png';
import services1 from '../images/services1.jpg';
import services2 from '../images/services2.jpg';
import services3 from '../images/services3.jpg';
// import verified from '../images/verified.png';



 
const Home = () => {
  // Navbar Menu Script Start//
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
 
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);
 
  const smallScreenMenu = useCallback(() => {
    const menuLinks = document.querySelectorAll('.menu-link');
    if (windowWidth <= 992) {
      menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
          const nextElement = link.nextElementSibling;
          if (nextElement) {
            nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
          }
        });
      });
    } else {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          const nextElement = link.nextElementSibling;
          if (nextElement) {
            nextElement.style.display = 'none';
          }
        });
      });
    }
  }, [windowWidth]);
 
  const resetMenu = useCallback(() => {
    if (windowWidth > 992) {
      const subMenus = document.querySelectorAll('.sub-menu');
      subMenus.forEach((menu) => {
        menu.style.display = 'none';
      });
    }
  }, [windowWidth]);
 
  useEffect(() => {
    smallScreenMenu();
    let resizeTimer;
    const handleResizeEnd = () => {
      smallScreenMenu();
    };
 
    const handleResizeWithTimeout = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResizeEnd, 100);
      resetMenu();
    };
 
    window.addEventListener('resize', handleResizeWithTimeout);
    return () => {
      window.removeEventListener('resize', handleResizeWithTimeout);
    };
  }, [smallScreenMenu, resetMenu]);
  // Navbar Menu Script End//
 
 
  return (
    // Navbar Menu section start//
 
    <div className="main-wrapper">
      <nav className="navbar d-flex">
        <div className="brand-and-icon">
         <img src="" alt="" /> <a href="index.html" className="navbar-brand">VALUECODE</a>
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
 
        <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`}>
          <ul className="navbar-nav d-flex flex-row">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#" className="menu-link">
                Services
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>By Team Expertise</h4>
                  <ul >
                    <li><a href="#">Staff Augmentation</a></li>
                    <li><a href="#">smart tv</a></li>
                    <li><a href="#">Software Development</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Mobile App Development</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Mobile Development</h4>
                  <ul>
                    <h6>Native</h6>
                    <li><a href="#">Andriod</a> <span class="nav-divider"> | </span><a href="#">IOS</a></li>
                    <h6>Cross Platform</h6>
                    <li><a href="#">React Native</a><span class="nav-divider"> | </span><a href="#">Flutter</a><span class="nav-divider"> | </span><a href="#">Ionic</a><span class="nav-divider"> | </span><a href="#">Xamarin</a></li>
                    <h6>Ecommerce Development</h6>
                    <li><a href="#">Wordpress</a><span class="nav-divider"> | </span><a href="#">Magento</a></li>
 
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Web App Development</h4>
                  <ul>
                    <h6>Front End</h6>
                    <li><a href="#">React Js</a> <span class="nav-divider"> | </span><a href="#">Angular Js</a><span class="nav-divider"> | </span><a href="#">Inoic</a><span class="nav-divider"> | </span><a href="#">ROR</a></li>
                    <h6>Back End</h6>
                    <li><a href="#">Node Js</a><span class="nav-divider"> | </span><a href="#">Java</a><span class="nav-divider"> | </span><a href="#">Python</a><span class="nav-divider"> | </span><a href="#">PHP</a><span class="nav-divider"> | </span><a href="#">.net</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Other</h4>
                  <ul>
 
                    <li><a href="#">Legacy Modernization</a></li>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">Product Engineering Services</a></li>
                    <li><a href="#">Retail Solutions</a></li>
                    <li><a href="#">Low Code Development</a></li>
                    <li><a href='#'>IT Outsourcing Service</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="menu-link">
                Hire Developers
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>Web Developers</h4>
                  <ul>
                    <h4>Front End</h4>
                    <li><a href="#">React Js</a> <span class="nav-divider"> | </span><a href="#">Angular Js</a><span class="nav-divider"> | </span><a href="#">Inoic</a><span class="nav-divider"> | </span><a href="#">ROR</a></li>
                    <h4>Back End</h4>
                    <li><a href="#">Node Js</a><span class="nav-divider"> | </span><a href="#">Java</a><span class="nav-divider"> | </span><a href="#">Python</a><span class="nav-divider"> | </span><a href="#">PHP</a><span class="nav-divider"> | </span><a href="#">.net</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Mobile Developer</h4>
                  <ul>
                    <li><a href="#">React Native</a><span class="nav-divider"> | </span><a href="#">Flutter</a><span class="nav-divider"> | </span><a href="#">Ionic</a><span class="nav-divider"> | </span><a href="#">Xamarin</a></li>
                    <h4>FullStack Developer</h4>
                    <li><a href="#">MERN</a><span class="nav-divider"> | </span><a href="#">MEAN</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Devops Team</h4>
                  <ul>
                    <li><a href="#">AWS</a><span class="nav-divider"> | </span><a href="#">Azure</a></li>
                    <h4>QA Team</h4>
                    <li><a href="#">Manual</a><span class="nav-divider"> | </span><a href="#">Automation</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item border border-1 border-dark rounded mt-3 mb-3 p-5 text-center">
                  <p>Want to</p>
                  <h5>Hire Resource</h5>
                  <p>to work with you?</p>
                  <button type="button" className="btn">Hire Now</button>
 
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="menu-link">
                Product
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>Industries</h4>
                  <ul>
                    <li><a href="#">Health Teach</a></li>
                    <li><a href="#">Edu Teach</a></li>
 
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Products</h4>
                  <ul>
                    <li><a href="#">Employee Time Tracker</a></li>
                    <li><a href="#">POS Software</a></li>
                    <li><a href="#">Real-estate CRM Software</a></li>
                    <li><a href="#">Video Calling App</a></li>
                    <li><a href="#">Construction Management</a></li>
                  </ul>
                </div>
 
                <div className="sub-menu-item">
                  <h4>Protfolio</h4>
                  <img src={gymnImage} alt="gymn image" />
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="menu-link">
                Company
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>Overview</h4>
                  <ul>
                    <li><i class="fas fa-address-card px-2"></i><a href="#">About Us</a></li>
                    <li><i class="fas fa-user px-2"></i><a href="#">Clients</a></li>
                    <li><i class="fas fa-file-signature px-2"></i><a href="#">Case Studies</a></li>
                    <li><i class="fas fa-chalkboard-teacher px-2"></i><a href="#">Protfolio</a></li>
                    <li><i class="fas fa-address-book px-2"></i><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>Overview</h4>
                  <ul>
                    <li><i class="fas fa-award px-2"></i><a href="#">Awards</a></li>
                    <li><i class="fas fa-laptop-code px-2"></i><a href="#">Success Story</a></li>
                    <li><i class="far fa-edit px-2"></i><a href="#">FAQ</a></li>
                    <li><i class="far fa-star px-2"></i><a href="#">Rate Card</a></li>
                    <li><i class="fas fa-graduation-cap px-2"></i><a href="#">Careers</a></li>
                  </ul>
                </div>
                {/* <div className="sub-menu-item">
                                    <h2>gear up for sports & adventures</h2>
                                    <button type="button" className="btn">shop here</button>
                                </div>
                                <div className="sub-menu-item">
                                    <img src={helmetImage} alt="helmet image" />
                                </div> */}
              </div>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <button type="button">Hire Developer</button>
        </div>
      </nav>
      {/* Navbar Menu section end */}
 
      {/* Hero banner section start */}
      <section className='header'>
      <video autoPlay loop playsInline>
        <source src={Video} type="video/mp4"/>
      </video>
        <h2>Shop With Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, necessitatibus. Veniam corrupti deserunt, sint eligendi culpa sed aliquid error magnam id? Delectus laborum placeat ipsam est. Iusto dolores excepturi autem?</p>
        <button type="button">Hire Developer</button>
      </section>
   
      {/* Hero Banner section end */}
      
      {/* service section start */}
      <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
  <div className="container">
    <div className="row">
      {/* <div className="section-header text-center">
        <h2 className="fw-bold fs-1">
          Our
          <span className="b-class-secondary"> Services</span>
        </h2>
        <p className="sec-icon"><i class="fa-solid fa-gear"></i></p>
      </div> */}
    </div>
    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-5 justify-content-center">
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
                  <img src={agile} alt="agiletech" />
          </div>
          <h3>Agile tech-driven experience</h3>
          
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
               <img src={retention} alt="retention" />   
          </div>
          <h3>97% client retention rate</h3>
         
        </div>
      </div>
      <div className="col">
        <div className="service-card">
                <div className="icon-wrapper">
                  <img src={onboarding} alt="onboarding" />
          </div>
          <h3>Quick & seamless onboarding</h3>
         
        </div>
      </div>
      <div className="col">
        <div className="service-card">
                <div className="icon-wrapper">
                  <img src={project} alt="project" />
          </div>
          <h3>Fast project completion</h3>
          
        </div>
            </div>  
            <div className="col">
        <div className="service-card">
                <div className="icon-wrapper">
                  <img src={confidential} alt="confidential" />
          </div>
          <h3>100% confidentiality on NDA</h3>
          
        </div>
      </div>  
    </div>
  </div>
</section>
      {/* service section end  */}
      

      {/*---------------Our services start----------------------*/}
    

      <div className="section-header text-center">
        <h2 className="fw-bold fs-1 mt-5">
          Our
          <span className="b-class-secondary"> Services</span>
        </h2>
        <p className="sec-icon"><i class="fa-solid fa-gear"></i></p>
        <div className='container'>
          <div className='row'>
        <div className='col-lg-6 service'>
          <img src={services1} className='img-fluid' alt="services1" />
        </div>

            <div className='col-lg-6 hire'>
           <h1> Hire Dedicated Teams</h1>
              <p>  Hire an offshore dedicated software development team with highly skilled developers. Save yourself from recruitment hassles and infrastructure costs. Our AI-enabled hiring process helps you find the perfect fit for your project quickly and efficiently. </p>

            <button className='know'>Know More</button>
            </div>
             
            </div>
        </div>
        
        <div className='container mt-5'>
          <div className='row'>
       
            <div className='col-lg-6 hire'>
           <h1> Upgrade and Revamp your Project</h1>
              <p>  Modernize, redesign, and upgrade your application to offer updated and flexible features that will enhance your business performance and uplift your profit margin. We utilize AI-assisted development to simplify the process and deliver exceptional results faster. </p>

            <button className='know'>Know More</button>
            </div>
            <div className='col-lg-6 service'>
          <img src={services3} className='img-fluid' alt="services1" />
        </div>
             
            </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
        <div className='col-lg-6 service'>
          <img src={services2} className='img-fluid' alt="services1" />
        </div>

            <div className='col-lg-6 hire'>
           <h1> Software Development</h1>
              <p>  Get progressive software development services at Soft Suave. We develop robust, scalable, and secured web and mobile applications, built using AI-enhanced tools, to level up your business needs. Share your ideas, and take your business on a successful flight! </p>

            <button className='know'>Know More</button>
            </div>
             
            </div>
        </div>
      </div> 

      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-3'>
          <div className="icon-wrapper">
                  {/* <img src={verified} alt="verified"/> */}
          </div>
            <h1>20k <br /> Verified Profiles</h1>
          </div>
          <div className='col-lg-3'>
          <div className="icon-wrapper">
                  <img src={agile} alt="agiletech" />
          </div>
            <h1>6K+ <br />
            AI Interviews</h1>
          </div>
          <div className='col-lg-3'>
          <div className="icon-wrapper">
                  <img src={agile} alt="agiletech" />
          </div>
            <h1> 5:1 <br />
            Submit-to-Hire ratio</h1>
          </div>
          <div className='col-lg-3'>
          <div className="icon-wrapper">
                  <img src={agile} alt="agiletech" />
          </div>
            <h1>01 <br />
Month trial

</h1>
          </div>
        </div>
      </div>
     </div>


     
    
  );
};
 
export default Home;