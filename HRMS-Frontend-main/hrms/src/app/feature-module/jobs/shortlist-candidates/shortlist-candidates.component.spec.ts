import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistCandidatesComponent } from './shortlist-candidates.component';

describe('ShortlistCandidatesComponent', () => {
  let component: ShortlistCandidatesComponent;
  let fixture: ComponentFixture<ShortlistCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortlistCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortlistCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
