import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedJobsComponent } from './offered-jobs.component';

describe('OfferedJobsComponent', () => {
  let component: OfferedJobsComponent;
  let fixture: ComponentFixture<OfferedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
