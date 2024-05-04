import React from "react";
import NavBar from "./NavBar.jsx";
import { Row, Col, Carousel } from "react-bootstrap";
import Chart from "../pictures/chart.png";
import "./about.scss";
import Footer from "./Footer.jsx";
import { SAIT, Dietitian, Google, WorkingHoliday } from "../photos.js";

const About = () => {
  return (
    <>
      <div className="about">
        <NavBar />
        <div className="chart">
          <p className="me">
            <h3>Me..</h3>
          </p>
          <Row>
            <Col md={8} xl={6} className="chartImage">
              <img src={Chart} alt="chart" />
            </Col>
            <Col md={8} xl={6} className="chartText">
              <p>
                <span>Extroverted</span>, always seeking social interactions and
                energized by being around others.
              </p>
              <p>
                <span>Adaptable</span> nature allows me to thrive in any
                environment, easily adjusting to changes and challenges.
              </p>
              <p>
                <span>Meticulous</span> approach, I pay attention to detail and
                ensure accuracy in everything I do.
              </p>
              <p>
                <span>Accountability</span> is integral to my character; I take
                responsibility for my actions and their outcomes.
              </p>
              <p>
                <span>Innovative</span> mindset, constantly seeking new
                solutions and creative approaches to problems.
              </p>
              <p>
                <span>Self-motivated</span>, I pursue my goals with passion and
                drive, always striving for personal growth and excellence.
              </p>
            </Col>
          </Row>
        </div>
        <div className="experience">
          <Row>
            <Col md={9} className="experienceTextL">
              <h4>
                Information Technology - Southern Alberta Institute of
                Technology
              </h4>
              <p>
                During my two-year tenure in SAIT's Information Technology
                program, specializing in Software Development, I underwent
                rigorous training that prepared me for the demands of the
                industry. Through hands-on projects and expert instruction, I
                acquired proficiency in various programming languages and
                software development methodologies, ensuring a solid foundation
                for a successful career in the field.
              </p>
              {/* <p>
                In my transformative two-year journey through SAIT's Software
                Development program, I immersed myself in cutting-edge
                technologies and real-world projects, cultivating a robust skill
                set essential for the IT industry. With a solid foundation in
                programming languages and development methodologies, I am
                equipped to drive innovation and deliver impactful solutions in
                any professional setting.
              </p> */}
            </Col>
            <Col md={3}>
              <Carousel>
                {SAIT.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id} className="carousel">
                      <img src={photo.img} alt={photo.alt} className="sait" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Carousel>
                {Google.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id} className="carousel">
                      <img src={photo.img} alt={photo.alt} className="google" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col md={9} className="experienceTextR">
              <h4>Hardware QA Engineer - Google</h4>
              <p>
                As a Hardware QA Engineer at Google, I excelled in developing
                and executing comprehensive Test Plans/Cases for innovative
                Google Nest IoT devices. With a meticulous approach, I conducted
                daily manual testing, consistently surpassing 90~100 tests per
                day across iOS and Android Systems. My dedication to accuracy
                and collaboration led to significant project advancements,
                completing over 50% of the process within a six-month timeframe.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={9} className="experienceTextL">
              <h4>Working Holiday - Canada & Australia</h4>
              <p>
                With 2.5 years of enriching working holiday experience in Canada
                and Australia, I honed my cross-cultural communication skills,
                fostering collaboration with individuals from diverse
                backgrounds. This journey enhanced my adaptability and
                flexibility, vital traits for navigating the rapidly changing
                landscape of the tech industry. Additionally, I improved my
                language proficiency, presenting an added advantage for
                multinational tech companies seeking global talent.
              </p>
            </Col>
            <Col md={3}>
              <Carousel>
                {WorkingHoliday.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id} className="carousel">
                      <img src={photo.img} alt={photo.alt} className="wh" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Carousel>
                {Dietitian.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id} className="carousel">
                      <img
                        src={photo.img}
                        alt={photo.alt}
                        className="dietitian"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col md={9} className="experienceTextR">
              <h4>Dietitian</h4>
              <p>
                With a Bachelor of Science degree and a year-long career
                spanning roles as a dietitian in both hospital and biotech
                settings, I've demonstrated my adaptability and commitment to
                excellence. From conducting online consultations and crafting
                tailored diet plans to spearheading innovative marketing
                strategies for nutritional supplements, I am eager to contribute
                my skills to new challenges and thrive in diverse environments.
              </p>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <Row>
            <Footer />
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
