import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created as a list', () => {
    const lengthOfGetAllMethod: number = service.getAll().length;
    expect(lengthOfGetAllMethod).toBeGreaterThan(1);
  });
});
