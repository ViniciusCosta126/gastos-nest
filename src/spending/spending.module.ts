import { Module } from '@nestjs/common'
import { SpendingService } from './spending.service'
import { SpendingController } from './spending.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Spending } from './entities/spending.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Spending])],
  controllers: [SpendingController],
  providers: [SpendingService],
})
export class SpendingModule {}
