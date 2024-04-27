import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({ type: String, unique: true })
    name: string;

    @Prop({ type: String })
    mail: string;

}

export const UserSchema = SchemaFactory.createForClass(User);