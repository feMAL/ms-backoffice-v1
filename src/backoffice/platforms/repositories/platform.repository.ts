import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MongoBaseRepository } from "../../../common/repositories/base.mongo.repository";
import { Platform, PlatformDocument } from "../models/platform.model";

export class PlatformRepository extends MongoBaseRepository<PlatformDocument> {
    constructor(@InjectModel(Platform.name) private readonly platformModel: Model<PlatformDocument>) {
        super(platformModel);
    }
}