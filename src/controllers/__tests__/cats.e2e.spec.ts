import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModules } from '../../modules/cats.module';
import { CatService } from '../../providers/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  // eslint-disable-next-line prefer-const
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModules],
    })
      .overrideProvider(CatService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET cats', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(['test']);
  });

  afterAll(async () => {
    await app.close();
  });
});
