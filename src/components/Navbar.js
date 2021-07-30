import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import Home from '@material-ui/icons/Home'
import Apps from '@material-ui/icons/Apps'
import ContactMail from '@material-ui/icons/ContactMail'
import { makeStyles } from '@material-ui/core/styles'
import avatar from '../images/avatar.jpg'

import Footer from '../components/Footer'
import { DialogTitle } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#222',
    margin: 0,
    paddingBottom: '2rem 0',
  },
  arrow: {
    color: 'tomato',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  sidebar: {
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  drawerTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#511',
    padding: '0 8px',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}))

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  {
    listIcon: <AssignmentInd />,
    listText: 'Certifications',
    listPath: '/resume',
  },
  { listIcon: <Apps />, listText: 'Projects', listPath: '/portfolio' },
  { listIcon: <ContactMail />, listText: 'Contact', listPath: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <Avatar className={classes.avatar} src={avatar} alt='Krishan K Yadav' />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      <Box component='nav'>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar>
            <Typography variant='h5'>
              <a
                href='https://krishankyadav1.vercel.app/'
                style={{ textDecoration: 'none', color: 'tan' }}
              >
                Switch
              </a>
            </Typography>
            <Typography variant='h5' className={classes.title}>
              <a href='/' style={{ textDecoration: 'none', color: 'tan' }}>
                Portfolio
              </a>
            </Typography>
            <IconButton
              onClick={() => setOpen(true)}
              className={classes.sidebar}
            >
              &#9776;
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
        <DialogTitle disableTypography className={classes.drawerTitle}>
          <IconButton style={{ color: 'white' }} onClick={() => setOpen(false)}>
            &times;
          </IconButton>
        </DialogTitle>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar
