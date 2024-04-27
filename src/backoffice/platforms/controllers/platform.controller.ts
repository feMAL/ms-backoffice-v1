import { Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@Controller('platform')
@ApiTags('Platform')
export class PlatformController {
    constructor(

    ) {}

    @Post()
    @ApiBody({})
    async createPlatform(){
        
    }
}