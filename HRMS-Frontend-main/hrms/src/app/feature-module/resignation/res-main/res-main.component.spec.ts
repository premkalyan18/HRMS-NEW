import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResMainComponent } from './res-main.component';

describe('ResMainComponent', () => {
  let component: ResMainComponent;
  let fixture: ComponentFixture<ResMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
