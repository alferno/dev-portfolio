import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import avatar1 from '../images/rwd-cert.png'
import avatar2 from '../images/jads-cert.png'
import avatar3 from '../images/fel-cert.png'
import avatar4 from '../images/dv-cert.png'
import avatar5 from '../images/am-cert.png'
import avatar6 from '../images/qa-cert.png'
import avatar7 from '../images/litqa-cert.png'
import avatar8 from '../images/lfs-cert.png'

import { Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    alignItems: 'center',
    border: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: 'tomato',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '1rem 0',
    textTransform: 'uppercase',
  },
  body1: {
    color: 'tomato',
  },
  subtitle1: {
    color: 'tan',
  },
}))

const Resume = () => {
  const classes = useStyles()
  return (
    <Box component='header' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        Certifications
      </Typography>
      <Box component='div' className={classes.timeLine}>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/responsive-web-design'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              Responsive Web Designing
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar1}
              alt='responsive web design certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/javascript-algorithms-and-data-structures'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              javascript algorithms and data structures
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar2}
              alt='javascript algorithms and data structures certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/front-end-libraries'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              front end libraries
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar3}
              alt='front end libraries certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/data-visualization'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              data visualization
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar4}
              alt='data visualization certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/apis-and-microservices'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              apis and microservices
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar5}
              alt='apis and microservices certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/quality-assurance-v7'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              Quality Assurance
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar6}
              alt='Quality Assurance certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/information-security-and-quality-assurance'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              information security and quality assurance
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar7}
              alt=' information security and quality assurance certification'
            />
          </Link>
        </Box>
        <Box component='div' className={classes.timeLineItem}>
          <Link
            target='_blank'
            href='https://www.freecodecamp.org/certification/alferno/full-stack'
          >
            <Typography variant='h5' align='center' className={classes.heading}>
              Legacy Full Stack
            </Typography>
            <img
              style={{ height: '300px', width: '520px' }}
              src={avatar8}
              alt='Legacy Full Stack certification'
            />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Resume
