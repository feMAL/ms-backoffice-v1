import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';

import { CacheProviderModule } from './providers/cache/provider.module';

import { UtilsModule } from './utils/utils.module';
import { DatabaseModule } from './providers/database/database.module';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [
    ConfigurationModule,
    UtilsModule,
    CacheProviderModule,
    DatabaseModule.forRoot(),
    BackofficeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
