import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSelectDialogComponent } from './feature-select-dialog.component';

describe('FeatureSelectDialogComponent', () => {
  let component: FeatureSelectDialogComponent;
  let fixture: ComponentFixture<FeatureSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
