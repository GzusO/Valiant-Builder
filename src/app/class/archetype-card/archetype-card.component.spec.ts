import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeCardComponent } from './archetype-card.component';

describe('ArchetypeCardComponent', () => {
  let component: ArchetypeCardComponent;
  let fixture: ComponentFixture<ArchetypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchetypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchetypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
