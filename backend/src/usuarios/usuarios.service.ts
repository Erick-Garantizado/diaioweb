import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { Usuario } from './interfaces/user.interface';

@Injectable()
export class UsuariosService {
  user: Usuario[] = [
    {
      id: 1,
      nome: 'fulano',
      email: 'fulano@email.com',
      sexo: 'x',
      senha: '@123mudar',
    },
    {
      id: 1,
      nome: 'beltrano',
      email: 'beltrano@email.com',
      sexo: 'y',
      senha: '@123mudar',
    },
  ];
  async createUser(createUserDto: CreateUserDto) {
    const numId = this.user.length;
    console.log(numId);
  }
}
