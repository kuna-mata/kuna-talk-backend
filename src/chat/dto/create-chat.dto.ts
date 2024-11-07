import { IsDate, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  messageId: string;

  @IsString()
  message: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
