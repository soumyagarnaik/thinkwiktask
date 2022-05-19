import React,{useState,useEffect} from 'react'
import {Container,TextField,Box,Button, Typography,AppBar,Toolbar} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { register } from '../action/userAction'

const Register = () => {
  const [userName,setUserName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [confirmPassword,setConfirmPassword] =useState('')
  const [message,setMessage] =useState('')
  const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    const {  userInfo } = userRegister

  const navigate = useNavigate()

  const handleSubmit= (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setMessage('Password do not match')
    }else {
      dispatch(register(userName,email,password))
    }
  }
  useEffect(() => {
    if(userInfo && userInfo.userName === 'raj035' && userInfo.email === 'raj@example.com' && userInfo.password === 'raj123' ){
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
        <Typography variant='h6'>Sign Up</Typography>
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
              id="email"
              label="User Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {e => setEmail(e.target.value)}
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
             <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
              onChange = {e => setConfirmPassword(e.target.value)}
            />
            {message}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='primary'
            >
              Sign Up
            </Button>
          </Box>
          </Box>
    </Container>
    </>
  )
}

export default Register