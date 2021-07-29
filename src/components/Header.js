import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles'
import photo from '../images/avatar.jpg'

import Contact from './Contact'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { Button } from '@material-ui/core'

const data = ['Hi, I design and build user interfaces']

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    textTransform: 'uppercase',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
  summary: {
    color: 'tomato',
    paddingTop: '10px',
  },
  modal: {
    position: 'relative',
    color: 'tomato',
    textAlign: 'center',
    marginTop: '5rem',
  },
  modalOpen: {},
}))

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={photo} alt='Krishan K Yadav' />
      </Grid>
      <Typography className={classes.title} variant='h4'>
        <Typed strings={['Krishan K Yadav']} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={[
            'Frontend Developer',
            'Backend Developer',
            'RESTful and GRAPHQL Apis',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography className={classes.summary} variant='h4'>
        <Typed startDelay={2000} strings={data} typeSpeed={40} />
      </Typography>
      <div className={classes.modal}>
        <p style={{ fontSize: '20px', textDecoration: 'bold' }}>
          Get in touch for any queries
        </p>
        <Button
          variant='outlined'
          style={{ backgroundColor: '#4CAF50', color: 'white' }}
          onClick={handleClickOpen}
        >
          Contact Me
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        className={classes.modalOpen}
      >
        <DialogActions style={{ backgroundColor: 'tomato', color: 'tomato' }}>
          <Button
            onClick={handleClose}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            color='white'
          >
            &times;
          </Button>
        </DialogActions>
        <Contact />
      </Dialog>
    </Box>
  )
}

export default Header
