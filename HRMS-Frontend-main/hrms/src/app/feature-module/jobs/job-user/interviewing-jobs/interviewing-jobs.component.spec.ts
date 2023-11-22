import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewingJobsComponent } from './interviewing-jobs.component';

describe('InterviewingJobsComponent', () => {
  let component: InterviewingJobsComponent;
  let fixture: ComponentFixture<InterviewingJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewingJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
