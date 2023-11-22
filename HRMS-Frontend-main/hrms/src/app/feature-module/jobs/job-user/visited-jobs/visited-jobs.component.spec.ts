import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedJobsComponent } from './visited-jobs.component';

describe('VisitedJobsComponent', () => {
  let component: VisitedJobsComponent;
  let fixture: ComponentFixture<VisitedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
