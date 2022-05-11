import { Injectable } from '@nestjs/common';
import { Bolos } from './bolos.entity';


@Injectable()
export class BolosService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  private bolos: Array<Bolos> = [];

  public cadatraBolos(bolo: Bolos): Bolos {
    this.bolos.push(bolo);

    return bolo;
  }

  public buscaPorBoloById(id: number): Bolos {
    return this.bolos.find((bolo) => bolo.id === id);
  }
}