import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop()
  senderId: string;

  @Prop()
  receiverId: string;

  @Prop()
  messageId: string;

  @Prop()
  message: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
