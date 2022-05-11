import { Module } from '@nestjs/common';
import { BolosController } from './bolos.controller';
import { BolosService } from './bolos.service';

@Module({
  controllers: [BolosController],
  providers: [BolosService],
})
export class BolosModule {}
