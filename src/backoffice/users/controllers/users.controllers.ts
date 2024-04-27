import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { AccessValidationGuard } from "src/common/guards/access-validation.guard";
import { UserService } from "../services/user.service";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @UseGuards(AccessValidationGuard)
    @Get(':mail')
    async getUseInformation(@Param('mail') mail: string, @Req() req: Request ) {
        console.log(req)
        return this.userService.getUserInformation(mail)
    }
}