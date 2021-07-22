import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Facebook from '@material-ui/icons/Facebook'
import { Link } from '@material-ui/core'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    margin: '0 20px',
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Link href='https://www.github.com/alferno' className={classes.root}>
        <GitHub />
      </Link>
      <Link href='https://www.facebook.com/alferno' className={classes.root}>
        <Facebook />
      </Link>{' '}
      <Link
        href='https://www.linkedin.com/in/krishan-k-yadav-11a646148/'
        className={classes.root}
      >
        <LinkedIn />
      </Link>
    </BottomNavigation>
  )
}
export default Footer
