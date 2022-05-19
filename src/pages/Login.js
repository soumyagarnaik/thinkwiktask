import React, {useState} from 'react'
import {Container,TextField,Box,Button, Typography,AppBar,Toolbar} from '@material-ui/core'

const Login = () => {
  const [userName,setUserName] =useState('')
  const [password,setPassword] =useState('')
  const handleSubmit= () => {

  }
  console.log(userName,password)
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
              color='secondary'
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