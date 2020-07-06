import React from "react";
import { Container, Image } from "semantic-ui-react";
import ProfilePic from "../../images/profilepic.jpg";
import "../../Styles/Portfolio.css";

const About = () => (
  <Container text>
    <div className="test">
      <Image
        src={ProfilePic}
        size="medium"
        verticalAlign="top"
        floated="left"
      />
      <p>
        Hello! My name is Ben Cart. I was born and raised in Southeast Georgia
        on St. Simons Island. I have had many interesting jobs and experiences
        since departing home. I have worked very hard to receive a Bachelor's of
        Spanish from College of Charleston, a Flight Instructor Certificate in
        Helicopters, as well as an Airline Transport Pilot Certificate flying
        jets. As of July 2020, I have also completed a Web Development Bootcamp
        which I hope will lead to many new and exciting opportunities.
      </p>
      <p>
        My goal moving forward is to find a junior developer position in the
        Charlotte area. I have thorougly enjoyed the full stack aspect of web
        development but I would be thrilled to find myself in a primarily front
        end or back end role. I appreciate you taking a look at my profile and I
        hope you venture over the to the contact page to get in touch!
      </p>
    </div>
  </Container>
);

export default About;
