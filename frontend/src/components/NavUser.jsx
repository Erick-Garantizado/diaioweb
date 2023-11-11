import { DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from '@mui/joy'
import { LoadingButton } from '@mui/lab'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import api from '../services/api'

const NavUser = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [sexo, setSexo] = useState('')
  
  const handleSair = () => {    
    setLoading(true)
    localStorage.removeItem('user-token')
    navigate('/')
    setLoading(false)
  }

  const handleModal = () => {
    setOpen(true)
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
  }, []);

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
            onClick={ ()=>{navigate('/ler')} }> 
                Ler
            </Button>
            <Button color='inherit' 
            onClick={ ()=>{navigate('/usuarios')} }> 
                perfil
            </Button>
            <LoadingButton loading={loading} color="secondary" variant='contained'
            onClick={handleModal}
            > 
                sair
            </LoadingButton>
            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                  <WarningRoundedIcon />
                  Confirmação
                </DialogTitle>
                <Divider />
                <DialogContent>
                  Tem certeza que deseja sair?
                </DialogContent>
                <DialogActions>
                  <Button variant="solid" color="secondary" onClick={ handleSair }>
                    sair
                  </Button>
                  <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </DialogActions>
              </ModalDialog>
            </Modal>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavUser