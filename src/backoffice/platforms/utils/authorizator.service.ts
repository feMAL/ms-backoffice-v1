import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import config from '../../../config/external-servers/configuration'
import { PlatformDTO } from "../dtos/platform.dto";

@Injectable()
export class AuthorizatorPlatformService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async createPlatformInAuthService(platform: PlatformDTO, token:string): Promise<any> {
        try {
            const { data } = await axios.post<any>(
                `${this.appConfig.acvUrl}/platforms`, platform, {
                    headers: {Authorization: token}
                }
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }

    async getPlatformInAuthService(platform: string, token: string): Promise<any> {
        try {
            const { data } = await axios.get<any>(
                `${this.appConfig.acvUrl}/platforms/${platform}`, {
                    headers: {Authorization: token}
                }
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}