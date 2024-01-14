import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { SpendingService } from './spending.service'
import { CreateSpendingDto } from './dto/create-spending.dto'
import { UpdateSpendingDto } from './dto/update-spending.dto'

@Controller('despesas')
export class SpendingController {
  constructor(private readonly spendingService: SpendingService) {}

  @Post()
  async create(@Body() createSpendingDto: CreateSpendingDto) {
    const despesa = await this.spendingService.create(createSpendingDto)
    return { message: 'Despesa criada com sucesso!', despesa: despesa }
  }

  @Get()
  async findAll() {
    const despesas = await this.spendingService.findAll()
    return despesas
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.spendingService.findOne(id)
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateSpendingDto: UpdateSpendingDto,
  ) {
    const despesaAtualizada = await this.spendingService.update(
      id,
      updateSpendingDto,
    )

    return {
      message: 'Despesa atualizada com sucesso!',
      despesa: despesaAtualizada,
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.spendingService.remove(id)
  }
}
