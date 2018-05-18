import { TestBed, inject } from '@angular/core/testing';

import { MonstersService } from './monsters.service';

describe('MonstersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonstersService]
    });
  });

  it('should be created', inject([MonstersService], (service: MonstersService) => {
    expect(service).toBeTruthy();
  }));
});
