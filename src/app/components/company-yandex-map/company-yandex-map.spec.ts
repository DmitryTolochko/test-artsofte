import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyYandexMap } from './company-yandex-map';

describe('CompanyYandexMap', () => {
  let component: CompanyYandexMap;
  let fixture: ComponentFixture<CompanyYandexMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyYandexMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyYandexMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
