import React from 'react';
import { Link } from 'react-router-dom';
import mission1Img from '../assets/images/Mission1.jpg';

const Home = () => (
  <>
    <div className="cover" id="home">
      <div className="information">
        <h1>.</h1>
        <h3>Together, we can achieve so much more than we can alone</h3>
        <h2>We FOOD भोक manage food for</h2>
        <h1><span>NEEDY PEOPLES</span></h1>
        <h3><span>FOOD भोक Foundation</span></h3>
        <h1>.</h1>
        <Link to="/explore"><button>EXPLORE</button></Link>
        <Link to="/#donate"><button>DONATE</button></Link>
      </div>
    </div>

    <div className="about">
      <div className="imgcontanner">
        <div className="aboutimg" style={{ backgroundImage: `url(${mission1Img})` }}></div>
      </div>
      <div className="aboutcontent" id="whywedo">
        <h5>.</h5>
        <h1>Why We Do</h1>
        <p>
          भोकले व्यक्तिलाई सिक्न, काम गर्न, अवसरहरू खोज्न र समाजमा योगदान दिन
          गाह्रो बनाउँछ। यसले व्यक्तिको उर्जा खत्तम गर्छ, मानसिक तीक्ष्णतालाई
          नष्ट गर्छ, र उसको जीवनभर स्वास्थ्यमा ठूलो मूल्य चुकाउँछ।
        </p>
        <p>
          Helps to provide urgent aid to individuals and communities dealing
          with food poverty, ensuring them have access to basic meals for
          survival.
        </p>
        <Link to="/#donate">DONATE</Link>
        <br /><br />
        <h5>.</h5>
      </div>
    </div>

    <div className="service" id="service">
      <h5>SERVICES</h5>
      <h1>Our Latest Services</h1>
      <div className="details">
        <div className="info" data-aos="fade-up">
          <div className="logo"><i className="fas fa-book-reader"></i></div>
          <p id="head">What we do</p>
          <p>We efforts to address global hunger and food insecurity involve a combination of various strategies.</p>
        </div>
        <div className="info" data-aos="fade-up">
          <div className="logo"><i className="fas fa-book-open"></i></div>
          <p id="head">How we do it</p>
          <p>We helps these children continue their education through digital initiatives.</p>
        </div>
        <div className="info" data-aos="fade-up">
          <div className="logo"><i className="fas fa-book"></i></div>
          <p id="head">Make a difference</p>
          <p>₹ 1,000 can help a person to build a life and add wings to their dreams.</p>
        </div>
        <div className="info" data-aos="fade-up">
          <div className="logo"><i className="fas fa-chart-line"></i></div>
          <p id="head">Lives benefitted so far</p>
          <p>Over 1000 needy peoples have benefitted so far with thousands more to go.</p>
        </div>
      </div>
    </div>

    <div className="contact" id="contact">
      <h1>CONTACT US</h1>
      <div className="contactcontanner">
        <div className="contanner">
          <div className="heading">
            <div className="icon"><i className="far fa-map"></i></div>
            <div className="info">
              <p>Address :</p>
              <p id="contactinfo">Kirtipur, Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="heading">
            <div className="icon"><i className="fas fa-phone-alt"></i></div>
            <div className="info">
              <p>Phone :</p>
              <p id="contactinfo">01-4333333</p>
            </div>
          </div>
          <div className="heading">
            <div className="icon"><i className="far fa-envelope"></i></div>
            <div className="info">
              <p>Email :</p>
              <p id="contactinfo">vok@foodfoundation.org.np</p>
            </div>
          </div>
        </div>

        <div className="messageform">
          <div className="form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="NAME" required />
              <input type="email" name="email" placeholder="EMAIL" required />
              <input type="text" name="subject" placeholder="SUBJECT" required />
              <textarea name="message" id="inputbox" cols="30" rows="5" placeholder="MESSAGE" required></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="contercontent">
      <div className="counterbox one">
        <div className="information" data-aos="fade-down">
          <div className="number"><p style={{ color: "rgba(255, 255, 255, 0.9)" }}>4</p></div>
          <div className="text"><p style={{ color: "rgba(255, 255, 255, 0.9)" }}>Year <br /> Experienced</p></div>
        </div>
      </div>
      <div className="counterbox">
        <div className="information" data-aos="fade-down">
          <div className="number"><p>20K+</p></div>
          <div className="text"><p>Donation <br /> enrolled</p></div>
        </div>
      </div>
      <div className="counterbox one">
        <div className="information" data-aos="fade-down">
          <div className="number"><p style={{ color: "rgba(255, 255, 255, 0.9)" }}>10</p></div>
          <div className="text"><p style={{ color: "rgba(255, 255, 255, 0.9)" }}>Plus <br /> Food Centres</p></div>
        </div>
      </div>
      <div className="counterbox">
        <div className="information" data-aos="fade-down">
          <div className="number"><p>7</p></div>
          <div className="text"><p>Provinces <br /> All over Nepal</p></div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
