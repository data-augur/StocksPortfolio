import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}
  create(createTransactionDto: CreateTransactionDto) {
    const {stockId, userId, ...transData} = createTransactionDto
    return this.prisma.portfolioTransaction.create({
      data:{
        ...transData,
        stock:{connect:{id:stockId}},
        user:{connect:{id:userId}}
    }});
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
