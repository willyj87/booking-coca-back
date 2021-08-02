// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Repository } from 'typeorm';
import { MockType } from './mockType';

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findOne: jest.fn((entity) => entity),
  }),
);
