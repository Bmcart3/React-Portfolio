import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
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
      <Grid.Column width={10} style={{display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
      <Card className="portfolioMargin"
            image={require("../../images/SomethingDifferent.png")}
            header='Something Different Project'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra1}
        />
        <Card className="portfolioMargin"
            image={require("../../images/project2.PNG")}
            header='Asking for a Friend'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra2}
        />
        <Card className="portfolioMargin"
            image={require("../../images/dayPlanner.PNG")}
            header='Day Planner'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra3}
        />
        <Card className="portfolioMargin"
            image={require("../../images/WeatherDashboard.PNG")}
            header='Weather Dashboard'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra4}
        />
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Portfolio;