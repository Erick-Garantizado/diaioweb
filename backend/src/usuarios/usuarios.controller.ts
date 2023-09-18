import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  getUsuarios() {
    return JSON.stringify({ test: 'ok' });
  }

  @Post()
  criarUsuario(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
