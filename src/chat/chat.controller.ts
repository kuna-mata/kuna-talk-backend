import { Controller, Post, Body, Get, Query } from '@nestjs/common';

import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './entities/chat.entity';
import { FindAllChatDto, FindChatDto } from './dto/find-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() dto: CreateChatDto): Promise<Chat> {
    return await this.chatService.create(dto);
  }

  @Get()
  async findAll(@Query() dto: FindAllChatDto): Promise<Chat[]> {
    return await this.chatService.findAll(dto);
  }

  @Get()
  async findOne(@Query() readChatDto: FindChatDto): Promise<Chat> {
    return await this.chatService.findOne(readChatDto);
  }

  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
    */
}
