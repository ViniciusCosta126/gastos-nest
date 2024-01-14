import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateSpendingDto } from './dto/create-spending.dto'
import { UpdateSpendingDto } from './dto/update-spending.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Spending } from './entities/spending.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SpendingService {
  constructor(
    @InjectRepository(Spending)
    private readonly spendingRepository: Repository<Spending>,
  ) {}
  async create(createSpendingDto: CreateSpendingDto) {
    const newSpending = new Spending()

    Object.assign(newSpending, createSpendingDto as Spending)

    const spending = await this.spendingRepository.save(newSpending)
    return spending
  }

  async findAll() {
    const despesas = await this.spendingRepository.find()
    return despesas
  }

  async findOne(id: string) {
    const despesa = await this.spendingRepository.findOneBy({ id: id })
    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada!')
    }
    return despesa
  }

  async update(id: string, updateSpendingDto: UpdateSpendingDto) {
    const despesa = await this.spendingRepository.findOneBy({ id: id })

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada!')
    }

    Object.assign(despesa, updateSpendingDto)

    await this.spendingRepository.save(despesa)
    return despesa
  }

  async remove(id: string) {
    const despesa = await this.spendingRepository.findOneBy({ id: id })

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada!')
    }

    await this.spendingRepository.delete(id)
  }
}
