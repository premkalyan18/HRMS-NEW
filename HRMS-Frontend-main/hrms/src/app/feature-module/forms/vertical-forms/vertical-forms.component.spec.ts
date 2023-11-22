import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalFormsComponent } from './vertical-forms.component';

describe('VerticalFormsComponent', () => {
  let component: VerticalFormsComponent;
  let fixture: ComponentFixture<VerticalFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
