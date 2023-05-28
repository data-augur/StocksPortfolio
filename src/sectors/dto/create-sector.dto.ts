import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSectorDto {
    @IsString()
    @ApiProperty()
    name:string;
}
