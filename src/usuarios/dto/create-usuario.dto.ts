import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @MaxLength(100, {
    message: 'O campo nome não pode ter mais de 100 caracteres',
  })
  nome: string

  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsEmail(undefined, { message: 'Digite um email valido' })
  email: string

  @IsNotEmpty({ message: 'O Campo senha não pode ser vazio' })
  @MinLength(8, { message: 'O campo deve ter no minimo 8 caracteres' })
  senha: string
}
