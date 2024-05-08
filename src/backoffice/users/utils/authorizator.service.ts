import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import config from '../../../config/external-servers/configuration'
import { UserResponse } from "../responses/user.response";
//import { AuthorizatorUserResponse } from "../responses/Authorizator.response";

@Injectable()
export class AuthorizatorService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async getMyAuthorizator(mail: string, token:string): Promise<UserResponse> {
        try {
            const { data } = await axios.get<UserResponse>(
                `${this.appConfig.acvUrl}/users/${mail}`,{
                    headers: {Authorization: token}
                }
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}