import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedCompaniesComponent } from './subscribed-companies.component';

describe('SubscribedCompaniesComponent', () => {
  let component: SubscribedCompaniesComponent;
  let fixture: ComponentFixture<SubscribedCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
