import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class DatabaseService {

    constructor(@InjectClient() private readonly connection: Connection) {}

    async findAllPosts() {

        try {
            const articles = await this.connection.query("SELECT * FROM x0xnb_content");
            const results = JSON.stringify(articles[0])
            return results;
        } catch (error) {
           throw new HttpException('Post not found', HttpStatus.NOT_FOUND)           
        }

    }

    async findPost(id: string) {

        try {
            const articles = await this.connection.query(`SELECT * FROM x0xnb_content WHERE id = ${id}`);
            const results = JSON.stringify(articles[0])
            return results;
        } catch (error) {
           throw new HttpException('Post not found', HttpStatus.NOT_FOUND)           
        }

    }
}
