import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Usuarios from './pages/usuarios/Usuarios'
import Escrever from './pages/escrever/Escrever'
import Ler from './pages/ler/Ler'

const Rotas = () => {
  return (
    <Routes>
        <Route path='/'         element={ <Home/> }     />
        <Route path='/login'    element={ <Login/> }    />
        <Route path='/cadastro' element={ <Cadastro/> } />
        <Route path='/usuarios' element={ <Usuarios/> } />
        <Route path='/escrever' element={ <Escrever/> } />
        <Route path='/ler'      element={ <Ler/> }      />
    </Routes>
  )
}

export default Rotas