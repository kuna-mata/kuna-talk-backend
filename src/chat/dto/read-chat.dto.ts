import { IsString } from 'class-validator';

export class ReadChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  messageId: string;
}
