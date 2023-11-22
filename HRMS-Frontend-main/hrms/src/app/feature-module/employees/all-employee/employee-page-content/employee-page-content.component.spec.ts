import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageContentComponent } from './employee-page-content.component';

describe('EmployeePageContentComponent', () => {
  let component: EmployeePageContentComponent;
  let fixture: ComponentFixture<EmployeePageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
