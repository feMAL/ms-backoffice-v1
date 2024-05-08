import { Body, Controller , Post, UseGuards, Headers} from "@nestjs/common";
import { ApiTags, ApiBody } from "@nestjs/swagger";
import { PlatformDTO } from "../dtos/platform.dto";
import { Platform } from "../models/platform.model";
import { PlatformService } from "../services/platform.service";
import { AccessValidationGuard } from "../../../common/guards/access-validation.guard";

@ApiTags('Platform')
@Controller('platform')
@UseGuards(AccessValidationGuard)
export class PlatformController {
    
    constructor(private readonly platformService: PlatformService){}

    @Post()
    @ApiBody({type: PlatformDTO})
    async createPlatform(
        @Body() body: PlatformDTO,
        @Headers('authorization') token: string
    ): Promise<any>{
        return await this.platformService.createPlatform(body, token);
    }

}