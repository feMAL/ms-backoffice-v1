import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AccessValidationGuard } from "src/common/guards/access-validation.guard";
import { UserService } from "../services/user.service";
import { ApiBody } from "@nestjs/swagger";

@Controller('user')
@UseGuards(AccessValidationGuard)
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':mail')
    async getUseInformation(@Param('mail') mailInformation: string, @Res() res ) {
        const {mail} = res.locals;
        return await this.userService.getUserInformation(mail)
    }

    @Post()
    @ApiBody({

    })
    async registerUserInBackoffice(@Body() body, @Res() res){
        const {mail} = res.locals
        return await this.userService.saveUserInformation(mail)
    }
}