import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Section } from "./section.model";

export type PlatformDocument = HydratedDocument<Platform>

@Schema()
export class Platform {

    @Prop({ type: String, unique: true })
    name: string;

    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    type: string;

    @Prop([{ type: Types.ObjectId, ref: 'Section' }])
    sections: Section[];

}

export const PlatformSchema = SchemaFactory.createForClass(Platform);