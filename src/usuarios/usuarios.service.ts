import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'
import { Repository } from 'typeorm'
import { Usuario } from './entities/usuario.entity'
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  private async hashPassword(password: string) {
    const saltRounds = 10

    const salt = await bcrypt.genSalt(saltRounds)

    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const senhaHash = await this.hashPassword(createUsuarioDto.senha)
    createUsuarioDto.senha = senhaHash
    const usuario = await this.usuarioRepository.save(createUsuarioDto)
    return { message: 'Usuario criado com sucesso!', usuario: usuario }
  }

  async findUser(id: string) {
    const user = await this.usuarioRepository.findOneBy({ id: id })

    if (!user) {
      throw new NotFoundException('Usuario não encontrado, digite um id valido')
    }

    return user
  }

  async findAll() {
    const users = await this.usuarioRepository.find()
    return users
  }

  async findOne(id: string) {
    const user = await this.findUser(id)
    return user
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const user = await this.findUser(id)

    Object.assign(user, updateUsuarioDto as Usuario)

    const userUpdate = await this.usuarioRepository.save(user)
    return userUpdate
  }

  async remove(id: string) {
    const user = await this.findUser(id)
    await this.usuarioRepository.delete(id)
  }
}
