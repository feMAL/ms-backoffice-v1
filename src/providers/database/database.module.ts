import { DynamicModule, Module } from "@nestjs/common";
import { MySqlProviderModule } from "./mysql/provider.module";
import { MongoDBProviderModule } from "./mongo/provider.module";

import ConfigMongo from '../../config/database/mongo/configuration';
import ConfigSql from '../../config/database/sql/configuration'

@Module({
    providers: [
        MongoDBProviderModule,
        MySqlProviderModule
    ]
})
export class DatabaseModule {
    
    static forRoot(): DynamicModule{

        const providers = [];
        if(ConfigMongo().isEnabled) providers.push(MongoDBProviderModule);
        if(ConfigSql().isEnabled) providers.push(MySqlProviderModule);
        return {
            global: true,
            module: DatabaseModule,
            imports: providers,
            exports: providers,
        }
    }
}