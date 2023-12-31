import { Box, Container, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './Login.css'
import { LoadingButton } from '@mui/lab'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Navegacao from '../../components/Navegacao'
import { Snackbar } from '@mui/joy'

const Login = () => {
  const dimensaoBotao = { mt: 6, p: 2 };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [msgErro, setMsgErro] = useState('');
  const [open, setOpen] = useState(false);

  useEffect( () => {
    const token = localStorage.getItem('user-token');
    if (token) {
      navigate('/usuarios')
    }
  }, [navigate]);

  const handleEntrar = () => {
    setLoading(true);
    api.post('/login', {
      email: email,
      senha: senha
    }).then( ({ data }) => {
      localStorage.setItem('user-token', '')
      localStorage.setItem('user-token', data.token);
      navigate('/usuarios');
    }).catch( (e)=>{
      setOpen(true)
      if (e.message === "Network Error") {
        setMsgErro("Erro de conexao!");
      } else if (e.request.status === 401) {
        setMsgErro("Email ou senha incorreto");
      } else {
        console.log(e)
        setMsgErro("Erro inexperado.");
      }
    }).finally( () => {
      setLoading(false);
    });
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Box className='background' >
      <Navegacao/>

      <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'right'}} 
      autoHideDuration={2000} open={open} variant='solid' color='danger'
      onClose={handleClose}>
        { msgErro }
      </Snackbar>

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
            required
          />
          
          {/** campo senha */}
          <TextField
            label="Senha"
            type="password"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            required
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