import React from 'react'
import NavUser from '../../components/NavUser'
import { Box, Container, 
  FormControl, TextField } from '@mui/material'
import { Textarea } from '@mui/joy'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './Escrever.css'


const Escrever = () => {
  const dimensaoBotao = { mt: 6, p: 1 };
  const [loading, setLoading] = React.useState(false);
  const [titulo, setTitulo] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const navigate = useNavigate();

  const handleSalvar = () => {
    setLoading(true)
    const dados = {
      titulo: titulo,
      mensagem: mensagem
    }
    api.post('/salvar_depoimento', dados)
    .then( ({ data }) => {
      alert('Mensagem salva!');
      navigate('/ler');
    })
    .catch((e) => {
      alert(`Erro: ${e}`)
    })
    .finally( () => {
      setLoading(false);
    })
  }
  return (
    <>
      <NavUser/>
      <Container>

        <Box>
          <FormControl className='form-escrever'>

            {/** Tirulo */}
            <TextField label='Titulo' 
            value={titulo}
            onChange={ (e) => setTitulo(e.target.value) }  />
            
            {/** Mensagem */}
            <Textarea className='form-escrever2'
            minRows={8} maxRows={8} size="lg" 
            variant="outlined" placeholder="Querido diario..."
            value={ mensagem } onChange={ (e) => setMensagem(e.target.value) }/>
            

            {/** Botao */}
            <LoadingButton loading={ loading } color="primary" variant="contained" 
            sx={ dimensaoBotao } onClick={ handleSalvar }>
              Salvar
            </LoadingButton>            

          </FormControl>
        </Box>

      </Container>
    </>    
  )
}

export default Escrever