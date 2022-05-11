import { Injectable } from '@nestjs/common';
import { Bolos } from './bolos.entity';


@Injectable()
export class BolosService {
  private bolos: Array<Bolos> = [];

  public cadatraBolos(bolo: Bolos): Bolos {
    this.bolos.push(bolo);

    return bolo;
  }
}