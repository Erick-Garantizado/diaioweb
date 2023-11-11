import React from 'react'
import NavUser from '../../components/NavUser'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Ler = () => {
  const [depoimentos, setDepoimentos] = React.useState([]);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    api.get('/lista_mensagem')
    .then( ({ data }) => {
      setDepoimentos(data.depoimento);
      console.log(depoimentos)
    })
  }, []);

  const fatiaData = (data) => {
    let ano = data[0] + data[1] + data[2] + data[3]
    let mes = data[5] + data[6]
    let dia = data[8] + data[9]
    return `${dia}/${mes}/${ano}`
  }

  

  return (
    <>
      <NavUser/>
      <Box>
        <Box sx={{ display:'flex', flexWrap:'wrap-reverse', justifyContent:'flex-start' }}>

          {
            depoimentos.length === 0 ? (
              <h1>Sem mensagens ainda!</h1>
            ) :
            depoimentos.map( (depoimento) => ( 
              <Card sx={{ width: 225, m:5, p:2 }} key={depoimento.id}>
                <div>
                  <Typography level="title-lg">Titulo: { depoimento.titulo }</Typography>
                  <Typography level="body-sm">Data: { fatiaData(depoimento.createdAt) }</Typography>              
                </div>            
                <CardContent orientation="horizontal">
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    onClick={ () => { 
                      navigate(`/depoimento`)
                    } }
                  >
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            ))
          }          

        </Box>
      </Box>
    </>
  )
}

export default Ler