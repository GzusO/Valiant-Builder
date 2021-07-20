import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityContentComponent } from './ability-content.component';

describe('AbilityContentComponent', () => {
  let component: AbilityContentComponent;
  let fixture: ComponentFixture<AbilityContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
