import React, {useState,useEffect} from 'react'
import {Container,TextField,Box,Button, Typography,AppBar,Toolbar} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { login } from '../action/userAction'

const Login = () => {
  const [userName,setUserName] =useState('')
  const [password,setPassword] =useState('')
  const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

  const navigate = useNavigate()
  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch(login(userName,password))
  }
  useEffect(() => {
    if(userInfo && userInfo.userName === 'raj035' && userInfo.password === 'raj123'){
      setTimeout(()=> {
        navigate('/dashboard')
      },3000)
    }
},[navigate,userInfo])
  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Typography variant='h4'>Thinkwiik</Typography>
        </Toolbar>
      </AppBar>
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography variant='h6'>Sign In</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="email"
              autoFocus
              onChange = {e => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='primary'
            >
              Sign In
            </Button>
          </Box>
          </Box>
    </Container>
    </>
  )
}

export default Login