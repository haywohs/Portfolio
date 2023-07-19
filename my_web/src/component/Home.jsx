import React from "react";
import "./home.scss";
import NavBar from "./NavBar";
import { TypeAnimation } from "react-type-animation";
import { Alert, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <NavBar />
        <Container className="d-flex">
          <div className="left">
            <Alert
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                border: "none",
                color: "rgb(195, 179, 6)",
              }}
            >
              Hello, I am Haywo
              <br />A multi-hyphenate full stack developer <br />
              Coming from Taiwan but working in Canada. <br />
            </Alert>
          </div>
          <div className="right">
            <TypeAnimation
              sequence={[
                `C++ => std::cout<<"Hello, there";
                
                Java => System.out.println("Hello, there");

                Python => print('Hello, there');

                JavaScript => console.log("Hello, there");

                Ruby => puts "Hello, there"

                TypeScript => console.log("Hello, there");

                PHP => <?php echo "Hello, there";?>

                Swift => print("Hello, there")

                Perl => print "Hello, there";`,
                800,
              ]}
              wrapper="div"
              style={{ whiteSpace: "pre-line", color: "#bebcbc" }}
            ></TypeAnimation>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
