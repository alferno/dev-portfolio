import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import booklist from '../images/booklist.png'
import gatsby from '../images/gatsby.png'
import socialMedia from '../images/social-media.png'
import proshop from '../images/proshop.png'
import chatRoom from '../images/chatroom.png'
import calculator from '../images/calculator.png'

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    position: 'relative',
    zIndex: 1000,
    paddingTop: '70px',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    border: '4px solid green',
    margin: '3rem auto',
  },
}))

const projects = [
  {
    name: 'React Booklist',
    description: `This is a simple react project which displays several books in order with book and author name. This project also has a functionality for pop-ups.`,
    image: booklist,
    destination: 'https://react-booklist-2020.netlify.app/',
  },
  {
    name: 'Gatsby Full-Stack',
    description: `A static website powered by Gatsby with contentful for blogging. There are several pages you can map through without reloading. Blog contains picture support as well.`,
    image: gatsby,
    destination: 'https://gatsby-contentful2.netlify.app/',
  },
  {
    name: 'Social Media WebApp',
    description: `A social media web application made with MERNG stack. React is used for frontend while Nodejs and Expressjs for backend and MongoDB and GraphQL for database and api.`,
    image: socialMedia,
    destination: 'https://graphql-social-media.netlify.app/',
  },
  {
    name: 'E-commerce with MERN',
    description: `An e-commerce website made with MERN stack, also with an admin panel for easy CRUD operations on users and products (if necessary). Carousel and Search functionality is also available`,
    image: proshop,
    destination: 'https://proshopapp8888.herokuapp.com/',
  },
  {
    name: 'Chat Room',
    description: `A simple chat room webapp made with html,css and javascript. End user can join specific chat room (hard coded) with a custom username. A simple chatbot is also available to share basic information`,
    image: chatRoom,
    destination: 'https://chat-room-html.herokuapp.com/',
  },
  {
    name: 'Calculator',
    description: `A calculator made with html,css and javascript (jquery mostly). This calculator performs most of the basic mathematical operations with history for previous operations. For frontend bootstrap is also used in addition to simple css.`,
    image: calculator,
    destination: 'https://codepen.io/alferno/pen/vYmNXPj?editors=1000',
  },
]

const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <FacebookShareButton
                  url={project.destination}
                  quote={project.name}
                  hashtag='#programing joke'
                >
                  <FacebookIcon size={36} logoFillColor='white' />
                </FacebookShareButton>
                <TwitterShareButton
                  url={project.destination}
                  title={project.name}
                  hashtag='#programing joke'
                >
                  <TwitterIcon size={36} logoFillColor='white' />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={project.destination}
                  quote={project.name}
                  hashtag='#programing joke'
                >
                  <WhatsappIcon size={36} logoFillColor='white' />
                </WhatsappShareButton>
                <Button
                  target='_blank'
                  href={project.destination}
                  size='small'
                  color='primary'
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Portfolio
