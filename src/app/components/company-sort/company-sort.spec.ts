import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySort } from './company-sort';

describe('CompanySort', () => {
  let component: CompanySort;
  let fixture: ComponentFixture<CompanySort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
