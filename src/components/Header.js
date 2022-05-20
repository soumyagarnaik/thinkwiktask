import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,IconButton,MenuItem,Menu} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../action/userAction'
import AccountCircle from '@material-ui/icons/AccountCircle';



const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLogout= () => {
    dispatch(logout())
  }
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant='h4' style={{flexGrow:1}}>Thinkwiik</Typography>
          {userInfo && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{userInfo.email}</MenuItem>
                <MenuItem onClick={clickLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
    </AppBar>
  )
}

export default Header