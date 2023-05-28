import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StocksService {
  constructor(private prisma: PrismaService) {}
  
  create(createStockDto: CreateStockDto) {
    return this.prisma.stock.create({
      data:createStockDto
    });
  }

  findAll() {
    return this.prisma.stock.findMany();
  }

  findOne(id: number) {
    return this.prisma.stock.findUnique({where:{id:id}});
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return this.prisma.stock.update({
      where:{id:id},
      data:updateStockDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
