import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeResultsComponent } from './aptitude-results.component';

describe('AptitudeResultsComponent', () => {
  let component: AptitudeResultsComponent;
  let fixture: ComponentFixture<AptitudeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
