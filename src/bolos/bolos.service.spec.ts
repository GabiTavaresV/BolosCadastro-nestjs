import { Test, TestingModule } from '@nestjs/testing';
import { BolosService } from './bolos.service';

describe('BolosService', () => {
  let service: BolosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BolosService],
    }).compile();

    service = module.get<BolosService>(BolosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
