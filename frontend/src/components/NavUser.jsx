import { LoadingButton } from '@mui/lab'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const NavUser = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  

  const handleSair = () => {
    setLoading(true)
    localStorage.removeItem('user-token')
    navigate('/')
    setLoading(false)
  }
  
  useEffect(() => {
    api.get('/getusuario')
    .then( ({ data }) => {
      setNome(data.nome)
      setSexo(data.sexo)
    })
    .catch( (e)=>{
      alert(`Erro ${e}`)
    })
  }, [])


  return (
    <Box>
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, ml:3 }}>
                        Diario {sexo === 'm'? 'do' : 'da'} { nome }
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