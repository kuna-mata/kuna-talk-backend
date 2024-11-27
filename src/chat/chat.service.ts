import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './entities/chat.entity';
import {
  FindAllChatDto,
  FindAllInMinuteChatDto,
  FindChatDto,
} from './dto/find-chat.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async create(dto: CreateChatDto): Promise<Chat> {
    const result = await this.chatModel.create(dto);
    console.log('create', result);

    return result;
  }

  async findAll(dto: FindAllChatDto): Promise<Chat[]> {
    const result = await this.chatModel.find({
      senderId: dto.senderId,
      receiverId: dto.receiverId,
    });
    console.log('findAll', result);

    return result;
  }

  async findAllInMinute(dto: FindAllInMinuteChatDto): Promise<Chat[]> {
    const oneMinuteAgo = new Date(
      new Date(dto.createdAt).getTime() - 60 * 1000,
    );

    const result = await this.chatModel.find({
      senderId: dto.senderId,
      receiverId: dto.receiverId,
      createdAt: {
        $gte: oneMinuteAgo,
        $lte: dto.createdAt,
      },
    });
    console.log('findAllInMinute', result);

    return result;
  }

  async findOne(dto: FindChatDto): Promise<Chat> {
    const result = await this.chatModel
      .findOne({
        senderId: dto.senderId,
        receiverId: dto.receiverId,
        messageId: dto.messageId,
      })
      .exec();
    console.log('findOne', result);

    return result;
  }

  /*
  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
    */
}
