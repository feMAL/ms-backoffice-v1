import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SectionDocument = HydratedDocument<Section>

@Schema()
export class Section {

    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    title: string;

    @Prop({ type: String })
    subtitle: string;

}

export const SectionSchema = SchemaFactory.createForClass(Section);