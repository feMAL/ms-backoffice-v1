import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MongoBaseRepository } from "../../../common/repositories/base.mongo.repository";
import { User, UserDocument } from "../models/user.model";

export class UserRepository extends MongoBaseRepository<UserDocument> {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
        super(userModel);
    }
}