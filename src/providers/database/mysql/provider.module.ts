import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import Config from '../../../config/database/sql/configuration'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: Config().host,
            port: parseInt(Config().port) | 3306,
            username: Config().user,
            password: Config().pass,
            database: Config().name,
            entities: [],
            synchronize: true,
        })
    ]
})
export class MySqlProviderModule {}