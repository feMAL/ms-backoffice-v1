import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from '@nestjs/class-validator'

export class PlatformDTO {

    @IsString()
    @ApiProperty({ type: String })
    name: string;

    @IsString()
    @ApiProperty({ type: String })
    description: string;

    @IsString()
    @ApiProperty({ type: String, required: false})
    url?: string;


    @IsString()
    @ApiProperty({ type: String, required: false})
    type?: string;

}