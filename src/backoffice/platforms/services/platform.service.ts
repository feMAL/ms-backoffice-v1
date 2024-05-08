import { Injectable, Logger } from "@nestjs/common";
import { PlatformRepository } from "../repositories/platform.repository";
import { PlatformDTO } from "../dtos/platform.dto";
import { ErrorManager } from "../../../common/services/error.manager";
import { AuthorizatorPlatformService } from "../utils/authorizator.service";

@Injectable()
export class PlatformService {
    constructor(
        private platformRepository: PlatformRepository,
        private platformAuthService: AuthorizatorPlatformService
    ) {}

    async createPlatform(platform: PlatformDTO, token: string): Promise<any>{
        try {
            Logger.log(`CreatePlatform for ${platform.name}`, PlatformService.name);

            platform.name = platform.name.toLowerCase();

            const createdPlatform = await this.platformRepository.create(platform);

            const checkIfExistPlatformInAuth = await this.platformAuthService.getPlatformInAuthService(platform.name, token)

            return 
        }catch(error){

            throw new ErrorManager({type: "CONFLICT", message: "Error in database", context: PlatformService.name})
        }
    }
}