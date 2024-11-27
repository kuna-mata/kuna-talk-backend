import { IsDateString, IsString } from 'class-validator';

export class FindAllInMinuteChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsDateString()
  createdAt: Date;
}

export class FindAllChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;
}

export class FindChatDto {
  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  messageId: string;
}
