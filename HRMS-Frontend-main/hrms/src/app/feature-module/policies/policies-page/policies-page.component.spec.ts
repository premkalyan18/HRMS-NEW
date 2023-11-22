import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesPageComponent } from './policies-page.component';

describe('PoliciesPageComponent', () => {
  let component: PoliciesPageComponent;
  let fixture: ComponentFixture<PoliciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
