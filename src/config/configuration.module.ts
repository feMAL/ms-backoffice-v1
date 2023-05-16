import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { environments } from "./environments";
import { validationSchema } from "./configuration.validation";

import { SQLDatabaseConfigService } from "./database/sql/configuration.service";
import { MongoDatabaseConfigService } from "./database/mongo/configuration.service";
import { AppConfigService } from "./app/configuration.service"

import MongoDbConfig from './database/mongo/configuration';
import SqlDbConfig from './database/sql/configuration';
import AppConfig from './app/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: environments[`${process.env.NODE_ENV}`],
            ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
            load: [
                AppConfig,
                MongoDbConfig,
                SqlDbConfig
            ],
            validationSchema
        })
    ],
    providers: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
        SQLDatabaseConfigService
    ],
    exports: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
        SQLDatabaseConfigService
    ]
})
export class  ConfigurationModule {}