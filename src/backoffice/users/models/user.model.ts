import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    username: string;

    @Prop({ type: String, unique: true  })
    mail: string;

    @Prop({ type: Boolean  })
    blocked: boolean;

    @Prop({ type: String  })
    profile: string; 

    @Prop([{ type: String }])
    platforms: string[];

}

export const UserSchema = SchemaFactory.createForClass(User);