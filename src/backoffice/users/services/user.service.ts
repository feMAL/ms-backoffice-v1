import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { AuthorizatorService } from "../utils/authorizator.service";

@Injectable()
export class UserService {
    constructor ( 
        private userRepository: UserRepository,
        private authorizatorService: AuthorizatorService
    ) {}

    async getUserInformation(user: string) {
        return await this.userRepository.findOne({mail: user});
    }

    async saveUserInformation(user: string) {

        const userData = await this.authorizatorService.getMyAuthorizator(user);
        
        console.log(userData)
        return await this.userRepository.findOne({mail: user});
    }
}