import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from './authentication.png'
import { useNavigate } from 'react-router-dom'

const Navegacao = () => {
    const navigate = useNavigate();
    //const handleLogin = ()
  return (
    <Box>
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <a href="/">
                        <img src={ logo } alt="" srcset="" />
                    </a>                    
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, ml:3 }}>
                        Diarioweb
                    </Typography>
                    <Button color='inherit' 
                    onClick={ ()=>{navigate('/login')} }>
                        Login 
                    </Button>
                    <Button color='inherit' 
                    onClick={ ()=>{navigate('/cadastro')}}> 
                        Cadastro 
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )
}

export default Navegacao