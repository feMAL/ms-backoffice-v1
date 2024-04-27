import { Module } from "@nestjs/common";
import { UserController } from "./controllers/users.controllers";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.model";
import { ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        HttpModule,
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }]),
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
        UserRepository,
        ConfigService
    ]
})
export class UsersModule {}