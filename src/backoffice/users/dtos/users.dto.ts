import { IsAlphanumeric, IsEmail, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @IsEmail()
    @ApiProperty({type: String, required: true})
    mail: string;

}

