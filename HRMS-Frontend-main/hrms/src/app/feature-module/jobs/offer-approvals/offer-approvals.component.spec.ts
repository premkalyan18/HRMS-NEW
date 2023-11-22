import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferApprovalsComponent } from './offer-approvals.component';

describe('OfferApprovalsComponent', () => {
  let component: OfferApprovalsComponent;
  let fixture: ComponentFixture<OfferApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
