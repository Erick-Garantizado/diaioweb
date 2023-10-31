import { LoadingButton } from '@mui/lab'
import { Box, Container, FormControlLabel, Radio, RadioGroup, 
  TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Cadastro.css'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Navegacao from '../../components/Navegacao'


const Cadastro = () => {  
  const  dimensaoBotao = {mt: 4, p: 2};
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sexo, setSexo] = useState(true);
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const verificaSenha = () => {
    if (senha === confirmaSenha) {return true;} else {return false;}
  }

  const handleCadastrar = () => {
    setLoading(true);

    const prosseguir = verificaSenha();

    if (prosseguir) {
      api.post('/cadastro', {
        nome: nome,
        email: email,
        senha: senha,
        sexo: sexo,
      }).then( ({ data }) => {
        localStorage.setItem('user-token', data.token);
        navigate('/usuarios');
      }).catch( (e)=>{
        console.log(e.response.data)
        alert("deu erro");
      }).finally(() => {
        setLoading(false);
      });
    } else {
      alert("Os campos de senha estao divergentes!")
    }
    setLoading(false);
  }

  return (
    <Box className='background' >
      <Navegacao/>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box className='box-login' padding={'15px'}>
          <Typography variant='h4'>Cadastro</Typography>
          
          {/** campo Nome */}
          <TextField
            label="Nome"
            sx={{ my:3 }}
            fullWidth
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          
          {/** campo email */}
          <TextField
            label="E-mail"
            sx={{ mb:3 }}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          
          {/** campo senha */}
          <TextField
            label="Senha"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />

          {/** campo confirmacao de senha */}
          <TextField
            label="Confima senha"
            type="password"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setConfirmaSenha(e.target.value)}
            value={confirmaSenha}
          />

          {/** campo sexo */}          
          <RadioGroup sx={{ display: 'flex', justifyContent: 'center', 
          alignItems: 'center', flexDirection: 'row' }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="F"
            name="radio-buttons-group"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <FormControlLabel value="F" control={<Radio />} label="Feminino" />
            <FormControlLabel value="M" control={<Radio />} label="Masculino" />
          </RadioGroup>
          
          <LoadingButton loading={ loading } color="primary" variant="contained" 
          fullWidth sx={ dimensaoBotao } onClick={ handleCadastrar }>
            Cadastrar
          </LoadingButton>

        </Box>        
      </Container>
    </Box>
  )
}

export default Cadastro