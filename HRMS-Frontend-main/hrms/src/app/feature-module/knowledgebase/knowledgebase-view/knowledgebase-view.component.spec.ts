import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgebaseViewComponent } from './knowledgebase-view.component';

describe('KnowledgebaseViewComponent', () => {
  let component: KnowledgebaseViewComponent;
  let fixture: ComponentFixture<KnowledgebaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgebaseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgebaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
