import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import ProfilePic from "../../images/profilepic.jpg"

const About = () => (
  <Container text>
    <Header as="h2">Profile</Header>
    <Image
      src= {ProfilePic}
      size="small"
      verticalAlign="top"
      floated="left"
    />
    <p>
      Hello! My name is Ben Cart. I was born and raised in Southeast Georgia on St.
      Simons Island. I have had many interesting jobs and experiences since
      departing home. I have worked very hard to receive a Bachelor's of Spanish from College of
      Charleston, a Flight Instructor Certificate in Helicopters, as well as an Airline Transport Pilot 
      Certificate flying jets. As of July 2020, I have also completed a Web Development Bootcamp which 
      I hope will lead to many new and exciting opportunities.
    </p>
  </Container>
);

export default About;