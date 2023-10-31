import { LoadingButton } from '@mui/lab'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavUser = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('user-token')

  const handleSair = () => {
    setLoading(true)
    localStorage.removeItem('user-token')
    navigate('/login')
    setLoading(false)
}
  
  return (
    <Box>
        <AppBar position='static'>
            <Container>
                <Toolbar>                    
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, ml:3 }}>
                        Diario do usuario
                    </Typography>
                    <Button color='inherit' 
                    onClick={ ()=>{navigate('/escrever')} }>
                        Escrever
                    </Button>
                    <Button color='inherit' 
                    onClick={ ()=>{navigate('/ler')}}> 
                        Ler
                    </Button>
                    <LoadingButton loading={loading} color="secondary" variant='contained'
                    onClick={handleSair}
                    > 
                        sair
                    </LoadingButton>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )
}

export default NavUser