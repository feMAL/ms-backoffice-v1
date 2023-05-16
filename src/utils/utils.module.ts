import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CryptService } from './services/crypt.service';
import { HelperService } from './services/helper.service';
import Config from '../config/app/configuration';

@Module({
    imports: [
        JwtModule.register({
          secret: Config().jwtSecret,
          signOptions: {expiresIn: Config().jwtExp}
        }),
    ],
    providers: [
        CryptService,
        HelperService,
        JwtService
    ],
    exports: [
        CryptService,
        HelperService,
    ]
})
export class UtilsModule {}
