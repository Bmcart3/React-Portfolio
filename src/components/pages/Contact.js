import React from "react";
import { Container, Header } from "semantic-ui-react";
import "../../Styles/Portfolio.css"

const Contact = () => (
  <Container text>
    <div className="test">
      <Header as="h2">Contact Information</Header>
      <p><a href="../../images/BenCardWebDev.pdf" target="_blank" style={{color:"black"}} >Resume</a></p>
      <p><a href="https://github.com/Bmcart3" target="_blank" style={{color:"black"}}>GitHub</a></p>
      <p><a href="https://www.linkedin.com/in/ben-cart" target="_blank" style={{color:"black"}}>LinkedIn</a></p>
      
    </div>
  </Container>
);

export default Contact;