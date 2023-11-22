import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssMainComponent } from './ass-main.component';

describe('AssMainComponent', () => {
  let component: AssMainComponent;
  let fixture: ComponentFixture<AssMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
