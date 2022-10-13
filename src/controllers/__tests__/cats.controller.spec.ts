import { Test } from '@nestjs/testing';
import { CatsController } from 'src/controllers/cats.controller';
import { CatService } from 'src/providers/cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatService],
    }).compile();

    catsService = moduleRef.get<CatService>(CatService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const cat = catsService.create({
        name: 'Jamies',
        age: 5,
        breed: 'simese',
      });
      expect(await catsController.findAll()).toEqual([cat]);
    });
  });
});
