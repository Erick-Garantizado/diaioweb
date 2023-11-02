import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastro   from './pages/cadastro/Cadastro'
import Depoimento from './pages/depoimentos/Depoimento'
import Escrever   from './pages/escrever/Escrever'
import Home       from './pages/home/Home'
import Ler        from './pages/ler/Ler'
import Login      from './pages/login/Login'
import Usuarios   from './pages/usuarios/Usuarios'

const Rotas = () => {
  return (
    <Routes>
        <Route path='/'           element={ <Home/> }      />
        <Route path='/login'      element={ <Login/> }     />
        <Route path='/cadastro'   element={ <Cadastro/> }  />
        <Route path='/usuarios'   element={ <Usuarios/> }  />
        <Route path='/escrever'   element={ <Escrever/> }  />
        <Route path='/ler'        element={ <Ler/> }       />
        <Route path='/depoimento' element={ <Depoimento/> }/>
    </Routes>
  )
}

export default Rotas