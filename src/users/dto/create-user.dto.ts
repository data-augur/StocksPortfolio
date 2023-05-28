import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty()
    username: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    email: string;
}
