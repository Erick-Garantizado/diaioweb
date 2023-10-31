import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import NavUser from '../../components/NavUser'
import api from '../../services/api'
import { useState } from 'react'

const Usuarios = () => {
  

  return (
    <Box>
        <NavUser/>
        <Box sx={{display: "flex", height: "90vh", width: "100vw", alignItems: 'center', justifyContent: "center"}}>
          <Typography>
          A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.
          </Typography>
        </Box>
    </Box>
  )
}

export default Usuarios