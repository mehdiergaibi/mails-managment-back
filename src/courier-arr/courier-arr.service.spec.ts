import { Test, TestingModule } from '@nestjs/testing';
import { CourierArrService } from './courier-arr.service';

describe('CourierArrService', () => {
  let service: CourierArrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierArrService],
    }).compile();

    service = module.get<CourierArrService>(CourierArrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
