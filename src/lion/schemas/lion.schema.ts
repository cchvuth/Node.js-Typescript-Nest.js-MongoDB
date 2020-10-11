import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LionDocument = Lion & Document;

@Schema()
export class Lion {
  @Prop({
    required: true
  })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const LionSchema = SchemaFactory.createForClass(Lion);
