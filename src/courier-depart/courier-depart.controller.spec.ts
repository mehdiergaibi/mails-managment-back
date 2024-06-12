import { Test, TestingModule } from '@nestjs/testing';
import { CourierDepartController } from './courier-depart.controller';

describe('CourierDepartController', () => {
  let controller: CourierDepartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourierDepartController],
    }).compile();

    controller = module.get<CourierDepartController>(CourierDepartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
