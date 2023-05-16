import { Injectable } from '@nestjs/common';
import { HelperService } from './utils/services/helper.service';

@Injectable()
export class AppService {

  constructor(
    private helperService: HelperService
  ){}

  async getHello(): Promise<string> {
    await this.helperService.setCacheValuesExamples();
    return 'Hello World!';
  }
}
