import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsContentPageComponent } from './clients-content-page.component';

describe('ClientsContentPageComponent', () => {
  let component: ClientsContentPageComponent;
  let fixture: ComponentFixture<ClientsContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsContentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
