import React from 'react'
import "../components/front.css"
import img1 from "../components/images/fb.jpg";
import img2 from "../components/images/fa.jpg";
import img3 from "../components/images/iconA.png";
import img4 from "../components/images/team1.jpg";
import img5 from "../components/images/team2.jpg";
import img6 from "../components/images/team3.jpg";
import img7 from "../components/images/facebook.png";
import img8 from "../components/images/twitter.png";
import img9 from "../components/images/linkedin.png";
import img10 from "../components/images/team.png";
import img11 from "../components/images/medal.png";
import img12 from "../components/images/shield.png";
import img13 from "../components/images/delivery.png";
import img14 from "../components/images/repair.png";
import img15 from "../components/images/buyer.png";
import img16 from "../components/images/clock.png";



import { useNavigate } from "react-router-dom";


const Front = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="banner">
        <img src={img1} alt="" />
      </div>
      <h1 className="front-heading">The Best Sport Products Service</h1>
      <p className='front-subheading'>Discover a wide range of top-tier sports gear designed for performance, durability, and safety.</p>
      <button onClick={()=>navigate('/shop')} className="front-btn">
             Shop Now
          </button>
          <h1 className='about-heading'>About Sport Club</h1>
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
      <h1 className='about-heading'>Our Service</h1>
      <div className='service-container'>
        <div className='left'>
        <img src={img11} alt="" className='icon-img' />
          <h3 className='service-heading'>100% AUTHENTIC</h3>
          <p className='service-description'>Experience the assurance of our 100% authentic product, meticulously crafted to deliver exceptional quality and genuine satisfaction. Every purchase guarantees unmatched reliability, offering you peace of mind and the true value you deserve. Trust in our commitment to authenticity and excellence in every detail.</p>
        </div>
        <div className='middle'>
        <img src={img12} alt="" className='icon-img' />
        <h3 className='service-heading'>SECURE SHOPPING</h3>
          <p className='service-description'>Enjoy peace of mind with our secure shopping product. We prioritize your safety, employing advanced encryption and robust security measures to protect your personal and payment information. Shop confidently, knowing your data is safe and your transactions are secure. Trust in our commitment to providing a secure and seamless shopping experience.</p>
        </div>
        <div className='right'>
        <img src={img13} alt="" className='icon-img' />
        <h3 className='service-heading'>EXPRESS SHIPPING</h3>
          <p className='service-description'>Experience the convenience of our express shipping product. We ensure your orders reach you swiftly, without compromising on safety or quality. Enjoy fast, reliable delivery that fits your busy lifestyle. With our express shipping, you can count on timely arrivals and exceptional service every time you shop with us.</p>
        </div>
      </div>
      <div className='service-container-2'>
        <div className='left'>
        <img src={img14} alt="" className='icon-img' />
          <h3 className='service-heading'>CUSTOMIZED SERVICES</h3>
          <p className='service-description'>Discover the advantage of our customized services product. Tailored to meet your unique needs, we offer personalized solutions designed just for you. Our expert team ensures every detail aligns with your preferences, providing a seamless and satisfying experience. Trust us to deliver exceptional, bespoke services that exceed your expectations.</p>
        </div>
        <div className='middle'>
        <img src={img15} alt="" className='icon-img' />
        <h3 className='service-heading'>BUYERS GUIDE</h3>
          <p className='service-description'>Navigate your purchases with confidence using our buyer's guide product. Expertly crafted, it offers insightful advice, detailed comparisons, and practical tips to help you make informed decisions. Simplify your shopping experience and find the perfect products that meet your needs and preferences. Trust our guide to lead you to smart choices.</p>
        </div>
        <div className='right'>
        <img src={img16} alt="" className='icon-img' />
        <h3 className='service-heading'>24/7 SERVICE</h3>
          <p className='service-description'>Experience unmatched convenience with our 24/7 service product. Available anytime, our dedicated team is ready to assist you with any needs or concerns. Enjoy round-the-clock support and immediate responses, ensuring your satisfaction and peace of mind. Trust in our commitment to provide reliable, continuous service whenever you need it.</p>
        </div>
      </div>
      


      <h1 className='about-heading'>Our Expert Team</h1>

      <div className='team'>
        <div className='left'>
        <img src={img4} alt="" className='icon-img2' />
        <h3 className='service-heading'>Mark Lawrance</h3>
        <h6 className='service-sub'>Accountent</h6>
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
        <h6 className='service-sub'>Manager</h6>
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
        <h6 className='service-sub'>Developer</h6>
        <p className='team-description'>Curious, tech-geeck and gets serious when it comes to work.</p>
        <div className='icon'>
        <img src={img7} alt="" className='icon-img3' />
        <img src={img8} alt="" className='icon-img3' />
        <img src={img9} alt="" className='icon-img3' />
          
        </div>
        </div>
      </div>
      <div className='blank'></div>

      <h1 className='partner-heading'>Our Partners</h1>
      <div className="partner-container">
        
        <div className="right-description">
          <p className='partner-description'>Our partner is a highly innovative and reliable organization 
            dedicated to delivering top-tier solutions across various 
            industries. They excel in providing exceptional customer service, 
            always ensuring clients' needs are met with utmost precision and 
            care. Their collaborative approach fosters strong partnerships, 
            encouraging mutual growth and success. With a focus on cutting-edge 
            technology and industry best practices, they consistently exceed 
            expectations, making them a trusted and invaluable ally in achieving 
            business objectives and driving sustainable growth.</p>
        </div>
        <div className="left-team-image">
          <img className="partner-image" src={img10} />
        </div>
      </div>

    </section>
  )
}

export default Front