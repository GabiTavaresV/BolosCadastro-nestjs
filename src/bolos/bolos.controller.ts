import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get()
  public findAll() {
    return this.bolosService.findAll()
  }

  @Get('id')
  public buscaPorBoloById(@Param('id') id:number){
    const boloEncontrado = this.bolosService.buscaPorBoloById(id)

    return boloEncontrado
  }
}
