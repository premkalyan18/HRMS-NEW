import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesViewComponent } from './activites-view.component';

describe('ActivitesViewComponent', () => {
  let component: ActivitesViewComponent;
  let fixture: ComponentFixture<ActivitesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
