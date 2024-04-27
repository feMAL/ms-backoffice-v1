import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor (
        private userRepository: UserRepository
    ) {}

    async getUserInformation(user: string) {
        return await this.userRepository.findOne({mail: user});
    }
}