import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstimateComponent } from './create-estimate.component';

describe('CreateEstimateComponent', () => {
  let component: CreateEstimateComponent;
  let fixture: ComponentFixture<CreateEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
