import React             from 'react'
import NavUser           from '../../components/NavUser'
import { Alert, Box, Container, FormControl, Snackbar, TextField } from '@mui/material'
import { Textarea }      from '@mui/joy'
import { LoadingButton } from '@mui/lab'
import { useNavigate }   from 'react-router-dom'
import api               from '../../services/api'
import './Escrever.css'


const Escrever = () => {
  const dimensaoBotao = { mt: 6, p: 1 };
  const [loading, setLoading]   = React.useState(false);
  const [titulo, setTitulo]     = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [corAlert, setCorAlert] = React.useState('');
  const [msgAlert, setMsgAlert] = React.useState('');
  const [open, setOpen]         = React.useState(false);
  const navigate                = useNavigate();

  const handleSalvar = () => {
    setLoading(true)

    const dados = {
      titulo: titulo,
      mensagem: mensagem
    }

    api.post('/salvar_depoimento', dados)
    .then( ({ data }) => {
      setCorAlert("success");
      setMsgAlert("Mensagem salva!");
      setOpen(true);

      setTimeout(() => {
        navigate('/ler');
      }, 2000);
    })
    .catch((e) => {
      setCorAlert("error");
      setMsgAlert(`Erro: ${e}`);
      setOpen(true)
    })

    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  return (
    <>
      <NavUser/>
      <Container>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} 
        anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
          <Alert onClose={handleClose} severity={corAlert} 
          sx={{ width: '100%' }} variant='filled'>
            { msgAlert }
          </Alert>
        </Snackbar>        

        <Box sx={{mt: 5}}>
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