import { Test, TestingModule } from '@nestjs/testing';
import { CourierArrController } from './courier-arr.controller';

describe('CourierArrController', () => {
  let controller: CourierArrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourierArrController],
    }).compile();

    controller = module.get<CourierArrController>(CourierArrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
