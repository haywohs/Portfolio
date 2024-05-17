import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from "@mui/material";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import Project1 from "../pictures/project1.png";
import Project2 from "../pictures/project2.jpg";
import Project3 from "../pictures/project3.jpg";
import "./project.scss";

const projects = [
  {
    title: "Drink Store",
    description: "Ecommerce website Developed by MERN stack",
    image: Project1,
    githubLink: "https://github.com/haywohs/DrinkWebApp",
  },
  {
    title: "Small Library",
    description: "A library program Developed by Java and MariaDB",
    image: Project2,
    githubLink: "https://github.com/haywohs/SmallLibrary",
  },
  {
    title: "Movie System",
    description: "A program imitate movie system Developed by Java",
    image: Project3,
    githubLink: "https://github.com/haywohs/Movie-System",
  },
];

const Projects = () => {
  return (
    <div className="project">
      <h2>Projects</h2>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className="card-container"
          >
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Button
                    className="project-button"
                    variant="contained"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<BiSolidRightArrowAlt />}
                  >
                    LOOK
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
