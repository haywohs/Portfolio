import React from "react";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import "./skill.scss";
import { SkillImg } from "../photos.js";
import Problem from "../pictures/problemSolving.png";
import Collaboration from "../pictures/collaboration.png";
import Multitasking from "../pictures/multitasking.jpg";
import Time from "../pictures/timeManagement.jpg";

const Skill = () => {
  return (
    <>
      <div className="skill">
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} xl={12}>
            <h2>HARD SKILL</h2>
          </Grid>
          <Grid item xs={12} md={12} xl={12} className="skill-layout">
            {SkillImg.map((skill) => {
              return (
                <Card key={skill.id} className="skill-card">
                  <CardMedia
                    component="img"
                    image={skill.img}
                    alt={skill.alt}
                    className="skill-img"
                  />
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={12} lg={12}>
            <h2>SOFT SKILL</h2>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <div className="flipy">
                  <Card className="flipper">
                    <div className="face front">
                      <CardMedia
                        component="img"
                        image={Problem}
                        alt="problem-solving"
                      />
                    </div>
                    <CardContent className="flip-text">
                      Problem-solving
                    </CardContent>
                  </Card>
                </div>
              </Grid>

              <Grid item xs={12} md={3}>
                <div className="flipy">
                  <Card className="flipper">
                    <div className="face front">
                      <CardMedia
                        component="img"
                        image={Collaboration}
                        alt="collaboration"
                      />
                    </div>
                    <CardContent className="flip-text">
                      Collaboration
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="flipy">
                  <Card className="flipper">
                    <div className="face front">
                      <CardMedia
                        component="img"
                        image={Multitasking}
                        alt="multitasking"
                      />
                    </div>
                    <CardContent className="flip-text">
                      Multi-tasking
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="flipy">
                  <Card className="flipper">
                    <div className="face front">
                      <CardMedia
                        component="img"
                        image={Time}
                        alt="time-management"
                      />
                    </div>
                    <CardContent className="flip-text">
                      Time Management
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Skill;
