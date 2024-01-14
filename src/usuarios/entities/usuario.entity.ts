import { Spending } from '../../spending/entities/spending.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'nome', type: 'varchar', length: 100, nullable: false })
  nome: string

  @Column({ name: 'email', type: 'varchar', length: 100, nullable: false })
  email: string

  @Column({ name: 'senha', type: 'varchar', length: 255, nullable: false })
  senha: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string

  @OneToMany(() => Spending, (spending) => spending.usuario, { cascade: true })
  despesas: Spending[]
}
