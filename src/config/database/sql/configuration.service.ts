import { ConfigService } from "@nestjs/config";

export class SQLDatabaseConfigService {
    constructor(private dbConfig: ConfigService){}

    get isEnabled(): boolean {
        return this.dbConfig.get('sql.isEnabled')
    }
}