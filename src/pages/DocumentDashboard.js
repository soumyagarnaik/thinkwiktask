import React, {useEffect} from 'react'
import { Typography,AppBar, Toolbar,IconButton,Menu,MenuItem,Grid} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../action/userAction'
import MaterialTable from '@material-table/core';
import {getDocuments} from '../action/documentsAction'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';


const DocumentDashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const documentList = useSelector(state => state.documentList)
  const {documents} = documentList
  console.log(documents, 'documents')
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLogout= () => {
    dispatch(logout())
  }
  const deleteDocument= () => {
    console.log('delete')
  }
  useEffect(()=>{
    dispatch(getDocuments())
  },[dispatch])

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
    <Grid>
      <Grid item xs={12}>
          <Typography>Welcome To Dashboard</Typography>
      </Grid>
      <Grid item xs={12}>
          <MaterialTable 
          title='Document Dashboard'
          columns= {[
            {title:'Document Id',field:'id'},
            {title:'Category',field:'category'},
            {title:'title',field:'title'},
            {title:'Price',field:'price'},
            {title:'View Details',render:(data)=> <Link to ={`${data.id}`}>View</Link>},
            {title:'Delete',render:()=> <IconButton onClick= {(data) => deleteDocument(data.id)}><DeleteIcon /></IconButton>}
          ]}

          data = {documents}/>
      </Grid>
    </Grid>
    </>
  )
}

export default DocumentDashboard