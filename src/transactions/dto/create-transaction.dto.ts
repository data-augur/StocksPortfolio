import { ApiProperty } from "@nestjs/swagger";
import { TransactionType } from "@prisma/client";
import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class CreateTransactionDto {

  @IsNumber()
  @ApiProperty({ required: true,
    example: 2,
    description: "the id of stock" })
    stockId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false,
    example: 2,
    description: "The id of user making the transaction" })
  userId?: number;

  @ApiProperty({ required: true,
    example: "BUY",
    description: "Transaction type"  })
  transcationType: TransactionType;

  @IsNumber()
  @ApiProperty({ required: true, 
    example: 100,
    description: "The quantity of stocks bought or sold" })
  quantity: number;

  @IsNumber()
  @ApiProperty({ required: true,
    example: 59.5,
    description: "The price at which stocks were bought or sold"  })
  price: number;
}
