import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h5' component='span'>
          /// Allan's Pc Build Quotation App ///
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
