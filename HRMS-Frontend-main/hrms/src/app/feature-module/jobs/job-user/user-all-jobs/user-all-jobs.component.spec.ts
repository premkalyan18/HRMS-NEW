import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllJobsComponent } from './user-all-jobs.component';

describe('UserAllJobsComponent', () => {
  let component: UserAllJobsComponent;
  let fixture: ComponentFixture<UserAllJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAllJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
