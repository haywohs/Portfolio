import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Mongodb from "../pictures/mongodb.png";

const Project = () => {
  return (
    <>
      <hr />
      <Container>
        <Row>
          <Col>
            <Image
              src="https://www.eclipse.org/org/artwork/images/eclipse_ide_logo.png"
              alt="eclipse"
              width="100"
              className="pt-3"
            />
          </Col>
          <Col>
            <Image
              src="https://netbeans.apache.org/images/apache-netbeans.svg"
              alt="netbeans"
              width="50"
              className="ms-3"
            />
          </Col>
          <Col>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="figma"
              width="30"
              className="pt-1 ms-4"
            />
          </Col>
          <Col>
            <Image
              src="https://nodejs.org/static/images/logos/nodejs.png"
              alt="nodejs"
              width="100"
            />
          </Col>
          <Col>
            <Image
              src={Mongodb}
              alt="mongoDB"
              width="100"
              className="pt-3 ms-3"
            />
          </Col>
          <Col>
            <Image
              src="https://code.visualstudio.com/assets/images/code-stable.png"
              alt="VScode"
              width="40"
              className="pt-2 ms-5"
            />
          </Col>
          <Col>
            <Image
              src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
              alt="mysql"
              width="50"
              className="ms-3 pt-1"
            />
          </Col>
          <Col>
            <Image
              src="https://1000logos.net/wp-content/uploads/2021/04/Oracle-logo-768x432.png"
              alt="oracle"
              width="60"
              className="pt-3"
            />
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default Project;
