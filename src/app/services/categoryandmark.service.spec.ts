import { TestBed } from '@angular/core/testing';

import { CategoryandmarkService } from './categoryandmark.service';

describe('CategoryandmarkService', () => {
  let service: CategoryandmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryandmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
