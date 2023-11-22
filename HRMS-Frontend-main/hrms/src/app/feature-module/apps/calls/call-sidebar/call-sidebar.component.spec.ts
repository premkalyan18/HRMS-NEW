import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSidebarComponent } from './call-sidebar.component';

describe('CallSidebarComponent', () => {
  let component: CallSidebarComponent;
  let fixture: ComponentFixture<CallSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
