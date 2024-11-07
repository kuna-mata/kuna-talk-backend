import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateChatDto } from './dto/create-chat.dto';

import { Chat } from './entities/chat.entity';
import { FindAllChatDto, FindChatDto } from './dto/find-chat.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async create(dto: CreateChatDto): Promise<Chat> {
    return await this.chatModel.create(dto);
  }

  async findAll(dto: FindAllChatDto): Promise<Chat[]> {
    const oneMinute = new Date(Date.now() - 60 * 1000);

    return await this.chatModel.find({
      senderId: dto.senderId,
      receiverId: dto.receiverId,
      createdAt: { $gte: oneMinute },
    });
  }

  async findOne(dto: FindChatDto): Promise<Chat> {
    return await this.chatModel
      .findOne({
        senderId: dto.senderId,
        receiverId: dto.receiverId,
        messageId: dto.messageId,
      })
      .exec();
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
