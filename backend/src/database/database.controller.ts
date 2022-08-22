import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {

    constructor(private readonly DatabaseService: DatabaseService) {}

    @Get('all')
    async getPosts() {
      return await this.DatabaseService.findAllPosts();
    }

    @Get(':id')
    async getPost(@Param('id') id: string) {
      return await this.DatabaseService.findPost(id);
    }
}
