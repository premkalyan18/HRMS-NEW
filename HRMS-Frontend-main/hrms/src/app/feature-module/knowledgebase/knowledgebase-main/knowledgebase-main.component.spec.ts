import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgebaseMainComponent } from './knowledgebase-main.component';

describe('KnowledgebaseMainComponent', () => {
  let component: KnowledgebaseMainComponent;
  let fixture: ComponentFixture<KnowledgebaseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgebaseMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgebaseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
