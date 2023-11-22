import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermMainComponent } from './term-main.component';

describe('TermMainComponent', () => {
  let component: TermMainComponent;
  let fixture: ComponentFixture<TermMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
