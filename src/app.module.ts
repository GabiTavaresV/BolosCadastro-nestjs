import { Module } from '@nestjs/common';
import { BolosModule } from './bolos/bolos.module';

@Module({
  imports: [BolosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
