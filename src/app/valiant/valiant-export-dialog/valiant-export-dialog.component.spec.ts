import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiantExportDialogComponent } from './valiant-export-dialog.component';

describe('ValiantExportDialogComponent', () => {
  let component: ValiantExportDialogComponent;
  let fixture: ComponentFixture<ValiantExportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiantExportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiantExportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
