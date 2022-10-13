import { Module } from '@nestjs/common';
import { CatsController } from 'src/controllers/cats.controller';
import { CatService } from 'src/providers/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatService],
  exports: [CatService],
})
export class CatsModules {}
