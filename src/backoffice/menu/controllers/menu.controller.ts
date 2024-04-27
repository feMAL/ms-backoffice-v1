import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MenuService } from "../services/menu.service";

@Controller('menu')
@ApiTags('Menu')
export class MenuController {

    constructor(
        private readonly menuService: MenuService
    ) {}

    @Get()
    async getMyMenu(): Promise<any> {
        return this.menuService.getMyMenu()
    }

}