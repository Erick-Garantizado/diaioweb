import { Box, Container } from '@mui/material'
import React from 'react'
import './Home.css'
import caderno from './caderno.jpg'
import caderno2 from './caderno2.jpg'
import caderno3 from './caderno3.jpg'
import Navegacao from '../../components/Navegacao'



const Home = () => {

  return (
    <>
      <Navegacao/>
      <Container>
        <Box >
          <Box className='box-home' sx={{ mb: 5, mt: 3 }}>
            <h1>Bem-vindo(a) ao diarioweb</h1>
            <p>Aqui voce pode escrever suas mensagens e desabafos</p>
          </Box>

          <Box className='box-home' >
            <img src={ caderno } alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ad consequatur tempora labore aperiam soluta vero veniam nesciunt doloribus 
              voluptates! Odit voluptates optio, eos facilis explicabo corporis consequuntur 
              laudantium dolores eius!
            </p>
          </Box>

          <Box className='box-home'>
            <img src={ caderno2 } alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ad consequatur tempora labore aperiam soluta vero veniam nesciunt doloribus 
              voluptates! Odit voluptates optio, eos facilis explicabo corporis consequuntur 
              laudantium dolores eius!
            </p>
          </Box>

          <Box className='box-home'>
            <img src={ caderno3 } alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ad consequatur tempora labore aperiam soluta vero veniam nesciunt doloribus 
              voluptates! Odit voluptates optio, eos facilis explicabo corporis consequuntur 
              laudantium dolores eius!
            </p>
          </Box>
        </Box>

      </Container>
    </>
  )
}

export default Home