import { Body, Controller, Post } from '@nestjs/common';
import { Bolos } from './bolos.entity';
import { BolosService } from './bolos.service';

@Controller('bolos')
export class BolosController {
  constructor(private readonly bolosService: BolosService) {}
  @Post()
  public cadastraBolos(@Body() bolos): Bolos {
    const boloCadastrado = this.bolosService.cadatraBolos(bolos);
    return boloCadastrado;
  }
}
