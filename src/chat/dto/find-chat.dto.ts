import { IsDateString, IsString } from 'class-validator';

export class FindChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  messageId: string;
}

export class FindAllChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsDateString()
  createdAt: Date;
}
