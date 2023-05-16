import { Injectable } from "@nestjs/common"
import { Document, Table } from 'typeorm';

@Injectable()
export abstract class SQLBaseRepository<T extends Document>{

    constructor(protected readonly baseModel: Table){}
}