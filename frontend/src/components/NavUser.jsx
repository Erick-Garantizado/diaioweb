import { DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from '@mui/joy'
import { LoadingButton } from '@mui/lab'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const NavUser = (props) => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  
  const handleSair = () => {    
    setLoading(true)
    localStorage.removeItem('user-token')
    navigate('/')
    setLoading(false)
  }

  const handleModal = () => {
    setOpen(true)
  }
  

  return (
    <Box>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1, ml:3 }}>
                Diario {props.sexo === 'm'? 'do' : 'da'} { props.nome }
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