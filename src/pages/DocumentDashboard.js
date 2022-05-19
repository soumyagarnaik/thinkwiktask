import React,{useState} from 'react'
import { Typography,AppBar, Toolbar,IconButton,Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';

const DocumentDashboard = () => {
  const [auth,setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Typography variant='h4' style={{flexGrow:1}}>Thinkwiik</Typography>
          {auth && (
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
                  vertical: 'bottom',
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
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