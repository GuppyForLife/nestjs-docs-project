import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDTO } from 'src/classes/create-cat.dto';
import { CatService } from 'src/providers/cats.service';
import { Cat } from 'src/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDTO) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
