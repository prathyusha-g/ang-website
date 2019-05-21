import { TestBed } from '@angular/core/testing';

import { AddproService } from './addpro.service';

describe('AddproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddproService = TestBed.get(AddproService);
    expect(service).toBeTruthy();
  });
});
