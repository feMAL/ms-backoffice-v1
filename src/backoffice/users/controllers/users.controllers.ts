import { Body, Controller, Get, Header, Headers, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AccessValidationGuard } from "src/common/guards/access-validation.guard";
import { UserService } from "../services/user.service";
import { ApiBody } from "@nestjs/swagger";
import { UserDto } from "../dtos/users.dto";
@Controller('user')
@UseGuards(AccessValidationGuard)
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':mail')
    async getUseInformation(
        @Param('mail') mailInformation: string,
        @Headers('authorization') token: string
    ) {
        return await this.userService.getUserInformation(mailInformation,token);
    }

    @Post()
    @ApiBody({
        type: UserDto
    })
    async registerUserInBackoffice(
        @Body() body: UserDto,
        @Headers('authorization') token: string,
    ){
        return await this.userService.saveUserInformation(body.mail, token);
    }

}