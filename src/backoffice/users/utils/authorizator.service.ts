import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import config from '../../../config/external-servers/configuration'
//import { AuthorizatorUserResponse } from "../responses/Authorizator.response";

@Injectable()
export class AuthorizatorService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async getMyAuthorizator(mail: string): Promise<any> {
        try {
            const { data } = await axios.get(
                `${this.appConfig.acvUrl}/user/${mail}`
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}