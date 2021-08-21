import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiantRandomizerComponent } from './valiant-randomizer.component';

describe('ValiantRandomizerComponent', () => {
  let component: ValiantRandomizerComponent;
  let fixture: ComponentFixture<ValiantRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiantRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiantRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
