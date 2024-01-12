import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { TiposDespesa } from '../enums/TipoDespesa'
import { Usuario } from '../../usuarios/entities/usuario.entity'

@Entity({ name: 'despesas' })
export class Spending {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'titulo', type: 'varchar', length: 100, nullable: false })
  titulo: string

  @Column({ name: 'data', type: 'date', nullable: false })
  data: string

  @Column({ name: 'tipo_despesa', nullable: false })
  tipo: TiposDespesa

  @Column({ name: 'valor', type: 'real', nullable: false })
  valor: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string

  @ManyToOne(() => Usuario, (usuario) => usuario.despesas, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  usuario: Usuario
}
