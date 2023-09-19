import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './interfaces/user.interface';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  getUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.getAllUser();
  }
  /*
  @Get("/id")
  getUsuario(@Param() param,) {
    return this.usuariosService.
  }*/

  @Post()
  criarUsuario(@Body() createUser: CreateUserDto): Promise<Usuario> {
    return this.usuariosService.createUser(createUser);
  }
}
