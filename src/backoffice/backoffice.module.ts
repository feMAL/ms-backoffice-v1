import { Module } from "@nestjs/common";
import { MenuModule } from "./menu/menu.module";
import { PlatformModule } from "./platforms/platform.module";
import { UsersModule } from "./users/users.module";

@Module({
    imports: [
        MenuModule,
        PlatformModule,
        UsersModule
    ],
    exports: [
        MenuModule,
        PlatformModule,
        UsersModule
    ]
})
export class BackofficeModule {}