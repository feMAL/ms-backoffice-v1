import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MongoBaseRepository } from "../../../common/repositories/base.mongo.repository";
import { Section, SectionDocument } from "../models/section.model";

export class SectionRepository extends MongoBaseRepository<SectionDocument> {
    constructor(@InjectModel(Section.name) private readonly sectionModel: Model<SectionDocument>) {
        super(sectionModel);
    }
}