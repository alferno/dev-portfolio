import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import emailjs from 'emailjs-com'

import Send from '@material-ui/icons/Send'

require('dotenv').config()

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: '#233',
    height: '100vh',
  },
  heading: {
    color: 'tomato',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  input: {
    color: '#fff',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tan',
  },
  field: {
    margin: '1rem 0rem',
  },
  popup: {
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    color: 'tomato',
    fontSize: '15px',
    textDecoration: 'bold',
  },
}))

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        color: '#fff',
        borderColor: 'tan',
      },
    },
  },
})(TextField)

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()

    let templateParams = {
      from_name: email,
      to_name: 'aniandp@gmail.com',
      subject: name,
      message_html: message,
    }
    try {
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      setShow(true)
      setName('')
      setEmail('')
      setMessage('')
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
        setSuccess(true)
      }, 3000)
      const successId = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => {
        clearTimeout(timeId)
        clearTimeout(successId)
      }
    } catch (err) {
      throw new Error(err)
    }
  }
  const classes = useStyles()
  return (
    <Box component='div' className={classes.contactContainer}>
      <Grid container justify='center'>
        <Box component='form' className={classes.form}>
          <Typography variant='h5' className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label='Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant='outlined'
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label='Message'
            variant='outlined'
            type='textarea'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant='outlined'
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={handleClick}
          >
            Contact Me
          </Button>
          {show ? <p className={classes.popup}>Sending...</p> : null}
          {success ? <p className={classes.popup}>Sent!</p> : null}
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact
