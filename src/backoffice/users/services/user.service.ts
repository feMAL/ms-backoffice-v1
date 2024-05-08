import { Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { AuthorizatorService } from "../utils/authorizator.service";
import { User } from "../models/user.model";
import { ErrorManager } from "../../../common/services/error.manager";

@Injectable()
export class UserService {
    constructor ( 
        private userRepository: UserRepository,
        private authorizatorService: AuthorizatorService
    ) {}

    async getUserInformation(user: string, token: string) {
        Logger.log(`GetUserInformation for ${user}`, UserService.name);
        const userIsInDB = await this.userRepository.findOne({mail: user});

        return userIsInDB;
    }

    async saveUserInformation(user: string, token: string) {
        Logger.log(`SaveUserInformation for ${user}`, UserService.name);
        try{
            const registredUser = await this.authorizatorService.getMyAuthorizator(user, token);

            if(!registredUser) {
                throw new ErrorManager({type: "NOT_FOUND", message: "Mail not found", context: UserService.name})
            }
            const {name, username, mail, blocked, profile} = registredUser;

            if(!profile) {
                throw new ErrorManager({type: "NOT_FOUND", message: "User have not profile", context: UserService.name})
            }
            
            const newUser: Partial<User> = {
                name,
                username,
                mail,
                blocked,
                profile: profile.name,
                platforms: profile.platformSectionRole.map(platforms => (platforms.platform.name))
            };
    
            return await this.userRepository.create(newUser);
    
        }catch(err){
            console.log(err)
            ErrorManager.dispatchError(!err.message? err: err.message);
        }
    }
}