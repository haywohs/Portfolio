import React, { useState, useEffect } from "react";
import "./home.scss";
import { Grid, Slide, Paper, Box } from "@mui/material";
import Reality from "../pictures/reality.jpg";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skill from "./Skill.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ScrollTop from "./ScrollTop.jsx";

const Home = () => {
  const titles = ["Coder", "Designer", "Dietitian", "Photographer"];
  const images = {};

  const [currentImage, setCurrentImage] = useState(Reality);

  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Activate slide in animation after a delay when the component mounts
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  titles.forEach(async (title) => {
    images[title] = (await import(`../pictures/${title}.jpg`)).default;
  });

  const handleMouseEnter = (title) => {
    setCurrentImage(images[title]);
  };
  const handleMouseLeave = () => {
    setCurrentImage(Reality);
  };

  return (
    <>
      <div className="home">
        <NavBar />
        <div>
          <Grid container spacing={4} className="jumbotron">
            <Grid item xs={6} className="left-text">
              {titles.map((title, index) => (
                <Slide
                  key={index}
                  direction="up"
                  in={true}
                  timeout={(index + 1) * 1000}
                >
                  <h5
                    onMouseOver={() => handleMouseEnter(title)}
                    onMouseOut={handleMouseLeave}
                  >
                    {title}
                  </h5>
                </Slide>
              ))}
            </Grid>
            <Grid item xs={6} className="right-img">
              <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit>
                <Paper elevation={3} className="img-paper">
                  <img src={currentImage} alt="Right" />
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </div>
        <Box id="project">
          <Project />
          <ScrollTop />
        </Box>
        <Box id="about">
          <About />
          <ScrollTop />
        </Box>
        <Box id="skill">
          <Skill />
          <ScrollTop />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
        <Box>
          <Footer />
        </Box>
      </div>
    </>
  );
};

export default Home;
