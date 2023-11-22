import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePageComponent } from './estimate-page.component';

describe('EstimatePageComponent', () => {
  let component: EstimatePageComponent;
  let fixture: ComponentFixture<EstimatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
