import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto)
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll()
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const user = await this.usuariosService.findOne(id)
    return user
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    const userUpdate = await this.usuariosService.update(id, updateUsuarioDto)
    return { message: 'Usuario atualizado com sucesso!', usuario: userUpdate }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.usuariosService.remove(id)
    return { message: 'Usuario removido com sucesso' }
  }
}
