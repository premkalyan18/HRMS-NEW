import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTypeComponent } from './goal-type.component';

describe('GoalTypeComponent', () => {
  let component: GoalTypeComponent;
  let fixture: ComponentFixture<GoalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
