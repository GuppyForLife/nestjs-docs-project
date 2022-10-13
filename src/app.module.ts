import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats.controller';
import { CatService } from './providers/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatService],
})
export class AppModule {}
