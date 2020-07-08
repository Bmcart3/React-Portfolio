import React from 'react'
import { Card, Icon, Grid } from 'semantic-ui-react'
import "../../Styles/Portfolio.css"


const extra1 = (
    <a href="https://github.com/Bmcart3/Something-Different" target="blank">
      <Icon name='github square' size="huge" />
    </a>
  )

const extra2 = (
    <a href="https://github.com/Bmcart3/Asking_for_a_friend" target="blank">
      <Icon name='github square' size="huge" />
    </a>
  )

const extra3 = (
    <a href="https://github.com/Bmcart3/DayPlanner" target="blank">
      <Icon name='github square' size="huge" />
    </a>
  )

const extra4 = (
    <a href="https://github.com/Bmcart3/WeatherDashboard" target="blank">
      <Icon name='github square' size="huge" />
    </a>
  )

const Portfolio = () => (
  <Grid columns='three'>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column className="bg" width={10} style={{display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
      <Card className="portfolioMargin"
            image={require("../../images/SomethingDifferent.png")}
            header='Something Different Project'
            description='App that allows the user to search for hobbies and receive wikipedia information and youtube tutorials.'
            extra={extra1}
        />
        <Card className="portfolioMargin"
            image={require("../../images/project2.PNG")}
            header='Asking for a Friend'
            description='App that allows user to browse questions, post questions, and also post answers to other users questions.'
            extra={extra2}
        />
        <Card className="portfolioMargin"
            image={require("../../images/dayPlanner.PNG")}
            header='Day Planner'
            description='Day Planner is an app that is simply used to plan out your workday. The hour blocks change color based on current time.'
            extra={extra3}
        />
        <Card className="portfolioMargin"
            image={require("../../images/WeatherDashboard.PNG")}
            header='Weather Dashboard'
            description='Simple weather app that allows the user to input a location and receive current weather as well as forecast weather.'
            extra={extra4}
        />
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Portfolio;