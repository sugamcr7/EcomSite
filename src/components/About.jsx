import React from "react";
import "../components/about.css";
import img1 from "../components/images/FrontBanner.jpg";
import img2 from "../components/images/aboutImage.jpg"
import img4 from "../components/images/team1.jpg";
import img5 from "../components/images/team2.jpg";
import img6 from "../components/images/team3.jpg";
import img7 from "../components/images/facebook.png";
import img8 from "../components/images/twitter.png";
import img9 from "../components/images/linkedin.png";

const About = () => {
  return (
    <section>
      <div className="banner">
        <img src={img1} alt="" />
      </div>
      <h1 className="about-heading">About Us</h1>
      <div className="about-container">
        <div className="left-image">
          <img className="image" src={img2} />
        </div>
        <div className="right-description">
          <p>In the arena, a battleground of dreams, athletes surged forward with determination etched 
            in their every movement. Each step, each leap, carried the weight of countless hours of training, 
            a testament to their unyielding commitment to excellence. The atmosphere crackled with anticipation, 
            fans on the edge of their seats, their hearts pounding in unison with the rhythm of the game.<br/><br/>

            Precision and agility were the weapons of choice, as players navigated the field with calculated finesse. 
            Every pass, every shot, was executed with unwavering focus, each movement a strategic maneuver in the pursuit of victory.<br/><br/>

            But amidst the intensity, there was also beauty. Beauty in the fluidity of motion, in the grace of a well-timed tackle, 
            in the unity of purpose shared between teammates. In those moments, the world seemed to fade away, leaving only the 
            pure essence of sport: a celebration of human potential, resilience, and the unbreakable bond forged on the field of play.</p>
        </div>
      </div>

      <h1 className='about-heading'>Our Expert Team</h1>

      <div className='team'>
        <div className='left'>
        <img src={img4} alt="" className='icon-img2' />
        <h3 className='service-heading'>Mark Lawrance</h3>
        <h6 className='service-sub'>Web Designer</h6>
        <p className='team-description'>Curious, tech-geeck and gets serious when it comes to work.</p>
        <div className='icon'>
        <img src={img7} alt="" className='icon-img3' />
        <img src={img8} alt="" className='icon-img3' />
        <img src={img9} alt="" className='icon-img3' />
          
        </div>
        </div>
        <div className='middle'>
        <img src={img5} alt="" className='icon-img2' />
        <h3 className='service-heading'>Jane Stenton</h3>
        <h6 className='service-sub'>Web Designer</h6>
        <p className='team-description'>Curious, tech-geeck and gets serious when it comes to work.</p>
        <div className='icon'>
        <img src={img7} alt="" className='icon-img3' />
        <img src={img8} alt="" className='icon-img3' />
        <img src={img9} alt="" className='icon-img3' />
          
        </div>
        </div>
        <div className='right'>
        <img src={img6} alt="" className='icon-img2' />
        <h3 className='service-heading'>John Smith</h3>
        <h6 className='service-sub'>Web Designer</h6>
        <p className='team-description'>Curious, tech-geeck and gets serious when it comes to work.</p>
        <div className='icon'>
        <img src={img7} alt="" className='icon-img3' />
        <img src={img8} alt="" className='icon-img3' />
        <img src={img9} alt="" className='icon-img3' />
          
        </div>
        </div>
      </div>

    </section>
  );
};

export default About;
