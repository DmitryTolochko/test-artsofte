import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFilter } from './company-filter';

describe('CompanyFilter', () => {
  let component: CompanyFilter;
  let fixture: ComponentFixture<CompanyFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
