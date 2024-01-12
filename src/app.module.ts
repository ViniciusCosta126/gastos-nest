import { Module } from '@nestjs/common'
import { UsuariosModule } from './usuarios/usuarios.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DbConfigService } from './config/db.config.service'
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [
    UsuariosModule,
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
