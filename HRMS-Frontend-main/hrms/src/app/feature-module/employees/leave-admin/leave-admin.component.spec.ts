import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAdminComponent } from './leave-admin.component';

describe('LeaveAdminComponent', () => {
  let component: LeaveAdminComponent;
  let fixture: ComponentFixture<LeaveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
