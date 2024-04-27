import { Injectable } from "@nestjs/common";
import { PlatformRepository } from "../repositories/platform.repository";

@Injectable()
export class PlatformService {
    constructor(
        private platformRepository: PlatformRepository
    ) {}


    async createPlatform() {
        
    }
}