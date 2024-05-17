import React, { useState } from "react";
import Chart from "../pictures/chart.png";
import ChartS from "../pictures/chartS.png";
import {
  CardMedia,
  Grid,
  Card,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./about.scss";
import Experience from "./Experience.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiKoala } from "react-icons/gi";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [initialHover, setInitialHover] = useState(false);

  const [open, setOpen] = useState(false);

  const handleMouseIn = () => {
    if (!initialHover) {
      setHovered(true);
      setInitialHover(true);
    } else {
      setHovered(true);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="about">
        <Grid container spacing={6}>
          <Grid item md={1} />
          <Grid item xs={12} md={6}>
            <Card id="img-chart">
              <CardMedia
                component="img"
                src={hovered ? Chart : ChartS}
                alt="chart"
                className={hovered ? "clear-img" : "pixel-img"}
                onMouseEnter={handleMouseIn}
                onMouseLeave={() => setHovered(false)}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <h1 className="about-title">
              About
              <br /> Me
            </h1>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box component="div" className="year-option">
              <h4>2020-now</h4>
              <p>
                My IT journey began in 2020. I started with a six-month course
                in <span>Java and Enterprise Information System Design</span>.
                Later, I joined Google as a <span>hardware QA engineer</span>.
                Driven by my passion for Canada, I applied to{" "}
                <span>Information Technology</span> major at Southern Alberta
                Institue of Technology and completed a two-year diploma in 2023.
                Throughout this time, I continuously accumulated experience and
                built my portfolio.
              </p>
              <div className="more-detail">
                <Button onClick={handleOpen} variant="text">
                  More Detail
                </Button>
              </div>
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <Experience />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>close</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box component="div" className="year-option">
              <h4>
                2018-2020 <FaCanadianMapleLeaf color="red" /> &{" "}
                <GiKoala color="#646464" />
              </h4>
              <p>
                With 2.5 years of enriching <span>working holiday</span>{" "}
                experience in Canada and Australia, I honed my cross-cultural
                communication skills, fostering collaboration with individuals
                from diverse backgrounds. This journey enhanced my adaptability
                and flexibility, vital traits for navigating the rapidly
                changing landscape of the tech industry. Additionally, I
                improved my language proficiency, presenting an added advantage
                for multinational tech companies seeking global talent.
              </p>
            </Box>
            <Box component="div" className="year-option" sx={{ mt: 6 }}>
              <h4>2017-2018 </h4>
              <p>
                With a <span>Bachelor of Science</span> degree and a year-long
                career spanning roles as a <span>dietitian</span> in both
                hospital and biotech settings, I've demonstrated my adaptability
                and commitment to excellence. From conducting online
                consultations and crafting tailored diet plans to spearheading
                innovative marketing strategies for nutritional supplements, I
                am eager to contribute my skills to new challenges and thrive in
                diverse environments.
              </p>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
