import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  MaxLength,
} from 'class-validator'
import { TiposDespesa } from '../enums/TipoDespesa'
import { Usuario } from '../../usuarios/entities/usuario.entity'

export class CreateSpendingDto {
  @IsNotEmpty({ message: 'O campo titulo não pode ser vazio' })
  @MaxLength(100, {
    message: 'O campo titulo deve ter no maximo 100 caracteres',
  })
  titulo: string

  @IsNotEmpty({ message: 'O campo data não pode ser vazio' })
  @IsDateString(undefined, { message: 'Insira uma data valida' })
  data: string

  @IsNotEmpty({ message: 'O campo valor não pode ser vazio' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Insira um campo valido' })
  valor: number

  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio' })
  @IsEnum(TiposDespesa, { message: 'Insira um valor valido para tipo' })
  tipo: TiposDespesa

  @IsUUID()
  usuario: Usuario
}
