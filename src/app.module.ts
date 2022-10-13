import { Module } from '@nestjs/common';
import { CatsModules } from './modules/cats.module';

@Module({
  imports: [CatsModules],
})
export class AppModule {}
