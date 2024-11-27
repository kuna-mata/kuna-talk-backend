import { IsDateString, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  messageId: string;

  @IsString()
  message: string;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
