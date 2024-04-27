import { Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@Controller('Section')
@ApiTags('Section')
export class SectionController {
    constructor(

    ) {}

    @Post()
    @ApiBody({})
    async createSection(){
        
    }
}