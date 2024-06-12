import { Test, TestingModule } from '@nestjs/testing';
import { CourierDepartService } from './courier-depart.service';

describe('CourierDepartService', () => {
  let service: CourierDepartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierDepartService],
    }).compile();

    service = module.get<CourierDepartService>(CourierDepartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
