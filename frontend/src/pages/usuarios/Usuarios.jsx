import { Box, Typography } from '@mui/material'
import NavUser from '../../components/NavUser'
import { useEffect, useState } from 'react'
import api from '../../services/api'


const Usuarios = () => {  
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');

  useEffect(() => {
    api.get('/getusuario')
    .then( ({ data }) => {
      setNome(data.nome)
      setSexo(data.sexo)
    })
    .catch( (e)=>{
      alert(`Erro ${e}`)
    })
  }, []);

  return (
    <Box>
        <NavUser nome={ nome } sexo={ sexo } />
        <Box sx={{display: "flex", height: "90vh", width: "100vw", alignItems: 'center', justifyContent: "center"}}>
          <Typography>
          A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.
          </Typography>
        </Box>
    </Box>
  )
}

export default Usuarios