import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineageCardComponent } from './lineage-card.component';

describe('LineageCardComponent', () => {
  let component: LineageCardComponent;
  let fixture: ComponentFixture<LineageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
