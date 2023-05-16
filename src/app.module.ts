import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';

import { CacheProviderModule } from './providers/cache/provider.module';
import { MongoDBProviderModule } from './providers/database/mongo/provider.module';
import { MySqlProviderModule } from './providers/database/mysql/provider.module';

import MongoDbConfig from './config/database/mongo/configuration';
import SqlDbConfig from './config/database/sql/configuration';

import { UtilsModule } from './utils/utils.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [
    ConfigurationModule,
    UtilsModule,
    CacheProviderModule,
    DatabaseModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
