import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateStockDto {
    @IsString()
    @ApiProperty()
    name: string

    @IsString()
    @ApiProperty()
    symbol:string

    @IsNumber()
    @ApiProperty()
    sectorId: number

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    currentPrice?: number

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    currentVolume?: number


}
