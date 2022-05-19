import React from 'react'
import { Typography,AppBar, Toolbar,IconButton,Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../action/userAction'


const DocumentDashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
    <>
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
    <Typography>Welcome To Dashboard</Typography>
    </>
  )
}

export default DocumentDashboard