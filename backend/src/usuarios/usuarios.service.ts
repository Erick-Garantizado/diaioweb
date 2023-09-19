import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { Usuario } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UsuariosService {
  users: Usuario[] = [
    {
      id: 1,
      nome: 'fulano',
      email: 'fulano@email.com',
      sexo: 'x',
      senha: '@123mudar',
    },
    {
      id: 2,
      nome: 'beltrano',
      email: 'beltrano@email.com',
      sexo: 'y',
      senha: '@123mudar',
    },
  ];

  async createUser(createUserDto: CreateUserDto): Promise<Usuario> {
    let numId = 2;
    numId++;
    const salto = 10;
    const senhaHashed = await hash(createUserDto.senha, salto);

    const novoUsuario = {
      id: numId,
      ...createUserDto,
      senhaHashed,
    };
    this.users.push(novoUsuario);

    return novoUsuario;
  }

  async getAllUser(): Promise<Usuario[]> {
    return this.users;
  }
}
