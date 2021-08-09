import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitSelectDialogComponent } from './trait-select-dialog.component';

describe('TraitSelectDialogComponent', () => {
  let component: TraitSelectDialogComponent;
  let fixture: ComponentFixture<TraitSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
