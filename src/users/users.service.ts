import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as md5 from 'md5'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      select:{
        username: true,
        id: true,
        email:true,
      },
      data:{username:createUserDto.username,
        password: md5(createUserDto.password),
        email:createUserDto.email  }  
    });
  }

  findAll() {
    return this.prisma.user.findMany({select:
      {
        id: true,
        username:true,
        email: true,
        createdAt: true,
        updatedAt: true
    }});
  }

  findOne(id: number) {
    const user = this.prisma.user.findUnique({where:{id:id}, 
      select:
      {
        username:true,
        email: true,
        createdAt: true,
        updatedAt: true
    }})

     
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({where:{id:id}, data:updateUserDto})
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async findOneByUserName(username:string){
    return this.prisma.user.findFirst({where:{username:username}})
  }
}
