import { Controller, Post, Body } from '@nestjs/common';

import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() dto: CreateChatDto): Promise<Chat> {
    try {
      return await this.chatService.create(dto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /*
  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

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
