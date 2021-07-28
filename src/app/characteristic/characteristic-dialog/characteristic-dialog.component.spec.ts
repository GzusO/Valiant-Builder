import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicDialogComponent } from './characteristic-dialog.component';

describe('CharacteristicDialogComponent', () => {
  let component: CharacteristicDialogComponent;
  let fixture: ComponentFixture<CharacteristicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
