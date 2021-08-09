import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitySelectDialogComponent } from './ability-select-dialog.component';

describe('AbilitySelectDialogComponent', () => {
  let component: AbilitySelectDialogComponent;
  let fixture: ComponentFixture<AbilitySelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitySelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitySelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
