import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ExtServicesConfigService {
    constructor(private extServicesConfig: ConfigService){}

    get acvUrl(): string {
        return this.extServicesConfig.get<string>('ext_services.acvUrl');
    }    
}