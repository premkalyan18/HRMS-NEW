import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateViewComponent } from './estimate-view.component';

describe('EstimateViewComponent', () => {
  let component: EstimateViewComponent;
  let fixture: ComponentFixture<EstimateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
