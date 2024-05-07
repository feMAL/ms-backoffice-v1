import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { environments } from "./environments";
import { validationSchema } from "./configuration.validation";

import { SQLDatabaseConfigService } from "./database/sql/configuration.service";
import { MongoDatabaseConfigService } from "./database/mongo/configuration.service";
import { ExtServicesConfigService } from "./external-servers/configuration.service";
import { AppConfigService } from "./app/configuration.service"

import MongoDbConfig from './database/mongo/configuration';
import SqlDbConfig from './database/sql/configuration';
import AppConfig from './app/configuration';
import ExternalServiceConfig from './external-servers/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: environments[`${process.env.NODE_ENV}`],
            ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
            load: [
                AppConfig,
                MongoDbConfig,
                SqlDbConfig,
                ExternalServiceConfig
            ],
            validationSchema,
            isGlobal: true
        })
    ],
    providers: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
        SQLDatabaseConfigService,
        ExtServicesConfigService
    ],
    exports: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
        SQLDatabaseConfigService,
        ExtServicesConfigService
    ]
})
export class  ConfigurationModule {}