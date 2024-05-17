import React, { useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { Typography, Button, Container, Grid, TextField } from "@mui/material";
import Instagram from "../pictures/instagram.png";
import LinkedIn from "../pictures/linkedin.png";
import Medium from "../pictures/medium.png";
import Github from "../pictures/github.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (data) => {
    const serviceID = "service_qmynh58";
    const templateID = "template_8fjjuoa";
    const publicKey = "4weMPYHLkeP2tpZxL";

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.log("Email failed to send", error);
      });
  };

  return (
    <>
      <div className="contact">
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            Let's Get In Touch
          </Typography>
          <Typography variant="h4" gutterBottom>
            Contact Me Via Social Media or Email
          </Typography>
          <Grid container spacing={2} className="contactrow">
            <Grid item xs={6} md={3}>
              <Button
                href="https://www.instagram.com/haywo0901/"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <img src={Instagram} alt="Instagram" />
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                href="https://www.linkedin.com/in/haywohs/"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                href="https://github.com/haywohs"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <img src={Github} alt="Github" />
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                href="https://medium.com/@haywo"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <img src={Medium} alt="Medium" />
              </Button>
            </Grid>
          </Grid>
          <div className="contactform">
            <form className="row inputform" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h6" gutterBottom className="lable">
                    Full Name
                  </Typography>
                  <TextField
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Typography variant="h6" gutterBottom className="lable">
                    Email
                  </Typography>
                  <TextField
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h6" gutterBottom className="lable">
                    Message
                  </Typography>
                  <TextField
                    multiline
                    placeholder="Talk to me..."
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
              <Button type="submit" className="submitbtn">
                Touch
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
