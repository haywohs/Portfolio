import React, { useState } from "react";
import "./home.scss";
import NavBar from "./NavBar";
import { Badge, Carousel, Col, Row } from "react-bootstrap";
import HomeCard from "./HomeCard.jsx";
import Footer from "./Footer.jsx";
import Robot from "../pictures/robot.jpg";
import Reality from "../pictures/reality.jpg";
import { GiPhotoCamera, GiBananaPeeled } from "react-icons/gi";
import { IoIosNutrition } from "react-icons/io";
import { IoNutrition } from "react-icons/io5";

const Home = () => {
  const [flash, setFlash] = useState(false);
  const mouseIn = () => {
    setFlash(true);
  };
  const mouseOut = () => {
    setFlash(false);
  };

  return (
    <>
      <div className="home" id="home">
        <NavBar />
        <div className="jumbotron">
          <div className="container">
            <Row>
              <Col className="col-md-3 text-center leftTitle">
                <div className="text">
                  <p
                    className="printCode"
                    onMouseEnter={mouseIn}
                    onMouseLeave={mouseOut}
                  >
                    {flash && <div className="showCode">print('Hello');</div>}
                    &lt;Coder&gt;
                  </p>
                  <p className="gradient">Designer</p>
                </div>
                <img className="slideLeft" src={Robot} alt="Robot" />
              </Col>
              <Col className="centerPictures  col-md-5"></Col>
              <Col className="col-md-4 text-center rightTitle">
                <img className="slideRight" src={Reality} alt="Reality" />
                <div className="text">
                  <p className="shaking">
                    D
                    <GiBananaPeeled
                      style={{
                        color: "FFDC16",
                        marginTop: -30,
                        marginRight: -2,
                        marginLeft: -2,
                      }}
                      size={15}
                    />
                    iet
                    <IoIosNutrition
                      style={{
                        color: "#ED7117",
                        marginTop: 15,
                        marginRight: -5,
                        marginLeft: -5,
                      }}
                      size={15}
                    />
                    iti
                    <IoNutrition style={{ color: "#8b0202" }} size={15} />
                    an
                  </p>
                  <p className="camera">
                    Photographer
                    <Badge bg="none">
                      <GiPhotoCamera
                        style={{
                          color: "black",
                          marginLeft: -10,
                          marginTop: -20,
                        }}
                      />
                    </Badge>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="homeCard">
          <Row>
            <HomeCard />
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

export default Home;
