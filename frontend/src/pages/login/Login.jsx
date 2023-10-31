import { Box, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './Login.css'
import { LoadingButton } from '@mui/lab'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Navegacao from '../../components/Navegacao'

const Login = () => {
  const dimensaoBotao = { mt: 6, p: 2 };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEntrar = () => {
    setLoading(true);
    api.post('/login', {
      email: email,
      senha: senha
    }).then( ({ data }) => {
      localStorage.setItem('user-token', data.token);
      navigate('/usuarios');
    }).catch( (e)=>{
      if (e.message === "Network Error") {
        alert("Erro de conexao!");        
      } else {
        console.log(e)
        alert("Erro inexperado.");
      }
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Box className='background' >
      <Navegacao/>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box className='box-login' padding={'15px'}>
          <Typography variant='h4'>Login</Typography>
          
          {/** campo email */}
          <TextField
            label="E-mail"
            sx={{ my:3 }}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          
          {/** campo senha */}
          <TextField
            label="Senha"
            type="password"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />

          <LoadingButton loading={ loading } color="primary" variant="contained" 
          fullWidth sx={ dimensaoBotao } onClick={ handleEntrar }>
            Entrar
          </LoadingButton>

        </Box>        
      </Container>
    </Box>
  )
}

export default Login